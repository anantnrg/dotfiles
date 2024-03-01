use tree_sitter::{Parser, Point, Query, QueryCursor};
use tree_sitter_rust::language;

const HIGHLIGHTS: &'static str = include_str!("rust.scm");

fn main() {
    // Initialize source
    let code = r#"fn main() {
    println!("hello world");
}"#;
    let rope = ropey::Rope::from(code);

    // Initialize treesitter
    let mut parser = Parser::new();
    parser
        .set_language(language())
        .expect("Couldnt set the language");

    let tree = parser
        .parse_with(
            &mut |byte: usize, _position: Point| -> &[u8] {
                if byte < rope.len_bytes() {
                    rope.slice(byte..).as_str().unwrap().as_bytes()
                } else {
                    &[]
                }
            },
            None,
        )
        .unwrap();

    let query = Query::new(language(), HIGHLIGHTS).unwrap();
    let mut cursor = QueryCursor::new();
    let matches = cursor.captures(&query, tree.root_node(), code.as_bytes());
    for capture in matches {
        let function_name_node = capture.node.child_by_field_name("function").unwrap();
        let function_name = function_name_node.utf8_text(code.as_bytes()).unwrap();
        let start_byte = function_name_node.start_byte();
        let end_byte = function_name_node.end_byte();
        println!(
            "Function call: {} (bytes {}-{})",
            function_name, start_byte, end_byte
        );
        // Use start_byte and end_byte to highlight the function name in your editor
    }

    println!("{:?}", tree.root_node());
}
