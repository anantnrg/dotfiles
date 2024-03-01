use std::collections::HashMap;

use freya::{
    hooks::Line,
    torin::{
        custom_measurer::LayoutMeasurer, dom_adapter::DOMAdapter, geometry::Size2D, node::Node,
    },
};
use ropey::RopeSlice;
use skia_safe::Font;

pub struct TextMeasurer<'a> {
    dom: EditorDom<'a>,
}

impl<'a> LayoutMeasurer<usize> for TextMeasurer<'a> {
    fn measure(
        &mut self,
        node_id: usize,
        _node: &Node,
        _parent_area: &freya::prelude::Area,
        _available_parent_area: &freya::prelude::Area,
    ) -> Option<Size2D> {
        if let Some(node) = self.dom.nodes.get(&node_id) {
            match &node.node_type {
                NodeType::Line { chars } => {
                    let line_len = 0.0f32;
                    for char in chars {
                        let LineChar { char, font } = char;
                        let text_bounds = font.measure_text(char.to_string().as_str(), Some(&paint)).1;
                    }
                }
                NodeType::Char(char) => {}
            }
        }
        None
    }
}

#[derive(Clone)]
pub struct LineChar<'a> {
    pub char: RopeSlice<'a>,
    pub font: Font,
}

#[derive(Clone)]
pub enum NodeType<'a> {
    Line { chars: Vec<LineChar<'a>> },
    Char(LineChar<'a>),
}

#[derive(Clone)]
pub struct EditorNode<'a> {
    pub parent: Option<usize>,
    pub children: Vec<usize>,
    pub node: Node,
    pub height: u16,
    pub node_type: NodeType<'a>,
}

#[derive(Default)]
pub struct EditorDom<'a> {
    pub nodes: HashMap<usize, EditorNode<'a>>,
}

impl<'a> EditorDom<'a> {
    pub fn add(
        &mut self,
        line_id: usize,
        children: Vec<usize>,
        line: Node,
        parent: Option<usize>,
        node_type: NodeType<'a>,
    ) {
        let parent_height = parent
            .map(|p| self.nodes.get(&p).unwrap().height)
            .unwrap_or(0);

        let height = parent_height + 1;
        self.nodes.insert(
            line_id,
            EditorNode {
                parent,
                children,
                height,
                node: line,
                node_type,
            },
        );
    }
}

impl<'a> DOMAdapter<usize> for EditorDom<'a> {
    fn children_of(&mut self, node_id: &usize) -> Vec<usize> {
        self.nodes
            .get(node_id)
            .map(|c| c.children.clone())
            .unwrap_or_default()
    }
    fn get_node(&self, node_id: &usize) -> Option<Node> {
        self.nodes.get(node_id).map(|c| c.node.clone())
    }
    fn height(&self, node_id: &usize) -> Option<u16> {
        self.nodes.get(node_id).map(|c| c.height)
    }
    fn is_node_valid(&mut self, _: &usize) -> bool {
        true
    }
    fn parent_of(&self, node_id: &usize) -> Option<usize> {
        self.nodes.get(node_id).and_then(|c| c.parent)
    }
    fn closest_common_parent(&self, _: &usize, _: &usize) -> Option<usize> {
        None
    }
}