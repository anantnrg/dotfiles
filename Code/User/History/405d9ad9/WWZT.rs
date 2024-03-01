use tree_sitter::Parser;
use tree_sitter_rust::language;

fn main() {
    // Initialize source
    let code = r#"fn main() {
    println!("hello world");
}"#;
    let rope = ropey::Rope::from(code);

    // Initialize treesitter
    let mut parser = Parser::new();
    parser.set_language(language());

    println!("{rope}");
}
