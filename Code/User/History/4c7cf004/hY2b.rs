use vello::kurbo::{Point, Size};

use crate::{color::Color, element::Element};

pub struct Div {
    pub children: Vec<Box<dyn Element>>,
    pub size: Size,
    pub position: Point,
    pub background: Color,
    pub border_width: f64,
    pub border_color: Color,
}

impl Element for Div {
    fn render(&mut self, scene: &mut vello::Scene) {}
}
