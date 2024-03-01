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
                let (chunk, chunk_byte_idx, _, _) = rope.chunk_at_byte(byte);
                &chunk.as_bytes()[byte - chunk_byte_idx..]
            },
            None,
        )
        .unwrap();

    let query = Query::new(language(), HIGHLIGHTS).unwrap();
    let mut cursor = QueryCursor::new();
    let matches = cursor.matches(&query, tree.root_node(), code.as_bytes()).peekable();

    println!("{:?}", tree.root_node());
}
