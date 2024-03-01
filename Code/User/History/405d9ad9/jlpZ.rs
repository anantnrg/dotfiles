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

    let mut last_byte_index = 0;
    let mut last_scope: Option<String> = None;

    while let Some((start, end)) = get_next_capture_range(&mut matches) {
        let start_offset = rope.byte_to_char(start);
        let end_offset = rope.byte_to_char(end);

        if let Some(scope) = get_scope_name(&query, &mut matches) {
            if last_scope.as_deref() != Some(scope) {
                println!("{:?}: {}-{}", scope, start_offset, end_offset);
                last_scope = Some(scope.to_owned());
            }
        }

        last_byte_index = end + 1;
    }
}

fn get_next_capture_range<'a>(
    matches: &mut std::iter::Peekable<tree_sitter::QueryIter<'a>>,
) -> Option<(usize, usize)> {
    loop {
        let query_match = matches.peek()?;

        if query_match.captures.is_empty() {
            matches.next();
            continue;
        }

        let capture = query_match.captures[0];
        let capture_range = capture.node.byte_range();
        return Some((capture_range.start, capture_range.end));
    }
}

fn get_scope_name<'a, 'tree>(
    query: &Query,
    matches: &mut std::iter::Peekable<tree_sitter::QueryMatches<'a, 'tree>,T>,
) -> Option<&'a str> {
    let query_match = matches.peek()?;
    let capture = query_match.captures[0];
    query_match
        .pattern()
        .capture_names()
        .get(usize::try_from(capture.index).unwrap())
        .map(|s| s.as_str())
}
