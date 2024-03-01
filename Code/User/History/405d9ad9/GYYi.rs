use tree_sitter::Parser;
use tree_sitter_rust::language;

fn main() {
    let code = r#"fn main() {
    println!("hello world");
}"#;
    let rope = ropey::Rope::from(code);

    println!("{rope}");
}
