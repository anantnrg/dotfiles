use tree_sitter::{Parser, Point};
use tree_sitter_rust::language;

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

    let tree = parser.parse_with(
        &mut |byte: usize, position: Point| -> &[u8] {
            if byte < rope.bytes().len() {
                rope.byte_to_char();
            }
        },
        None,
    );

    println!("{rope}");
}
