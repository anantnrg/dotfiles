use freya::prelude::*;
use ropey::Rope;
use synk_core::highlighter::{languages::Languages, theme::SyntaxTheme, TSParser};
use tree_sitter::QueryCursor;

#[allow(non_snake_case)]
#[component]
pub fn Document(rope: Rope) -> Element {
    let parser = TSParser::new(Languages::Rust, rope);
    let query = parser.query;
    let rope = parser.rope;
    let tree = parser.tree;
    let mut query_cursor = QueryCursor::new();
    query_cursor.set_byte_range(rope.line_to_byte(0)..rope.line_to_byte(rope.len_lines()));
    let theme = SyntaxTheme::default();

    let mut matches = query_cursor
        .matches(&query, tree.root_node(), RopeProvider(rope.slice(..)))
        .peekable();
    rsx! { rect { width: "calc(100% - 50)", height: "100%", direction: "vertical" } }
}
