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
    let mut matches = cursor
        .matches(&query, tree.root_node(), code.as_bytes())
        .peekable();

    let mut get_scope = |index: usize| loop {
        let query_match = matches.peek().unwrap();

        if query_match.captures.is_empty() {
            matches.next();
            continue;
        }
        let capture = query_match.captures[0];
        let capture_range = capture.node.byte_range();
        if index < capture_range.start {
            return None;
        } else if index < capture_range.end {
            return Some(query.capture_names()[usize::try_from(capture.index).unwrap()].as_str());
        } else {
            matches.next();
            continue;
        }
    };

    let scope = get_scope(0);

    println!("{:?}", scope);
}
