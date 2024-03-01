pub mod languages;

use std::{fs::read_to_string, iter::Peekable, path::PathBuf};

use languages::Languages;
use ropey::{iter::Chunks, Rope, RopeSlice};
use tree_sitter::{
    Language, Node, Parser, Query, QueryCursor, QueryMatch, QueryMatches, TextProvider, Tree,
};

pub struct TSParser {
    pub language: Language,
    pub query: Query,
    pub parser: Parser,
    pub tree: Tree,
    pub rope: Rope,
}

impl TSParser {
    pub fn new(language: Languages, rope: Rope) -> Self {
        let language = match language {
            Languages::Rust => tree_sitter_rust::language(),
        };
        let highlights_file = read_to_string(PathBuf::from(
            "/home/mik3y/projects/repos/synk/resources/syntaxes/rust.scm",
        ))
        .unwrap();

        let mut parser = Parser::new();
        parser.set_language(language).unwrap();
        let query = Query::new(language, &highlights_file).unwrap();
        let tree = parser
            .parse_with(
                &mut |index, _| {
                    let (chunk, chunk_byte_idx, _, _) = rope.chunk_at_byte(index);
                    &chunk.as_bytes()[index - chunk_byte_idx..]
                },
                None,
            )
            .unwrap();

        TSParser {
            language,
            query,
            parser,
            tree,
            rope,
        }
    }

    // pub fn parse<'a>(&'a self) -> Vec<QueryMatch<'a, 'a>> {
    //     let query = &self.query;
    //     let rope = &self.rope;
    //     let tree = &self.tree;

    //     let mut query_cursor = QueryCursor::new();
    //     query_cursor.set_byte_range(rope.line_to_byte(0)..rope.line_to_byte(rope.len_lines()));

    //     query_cursor
    //         .matches(&query, tree.root_node(), RopeProvider(rope.slice(..)))
    //         .collect::<Vec<_>>();
    //     let mut matches = Vec::new();
    //     while let Some(match_) = query_cursor
    //         .matches(&query, self.tree.root_node(), RopeProvider(rope.slice(..)))
    //         .next()
    //     {
    //         matches.push(match_);
    //     }

    //     matches
    // }

    pub fn get_capture_range<'a, T>(
        mut matches: Peekable<QueryMatches<'a, 'a, T>>,
    ) -> Option<(usize, usize)>
    where
        T: TextProvider<'a>,
    {
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

    pub fn get_scope<'a, T>(
        query: &Query,
        mut matches: Peekable<QueryMatches<'a, 'a, T>>,
        byte_idx: usize,
    ) -> Option<String>
    where
        T: TextProvider<'a>,
    {
        let query_match = matches.peek()?;
        let capture = query_match.captures[0];
        query_match
            .pattern()
            .capture_names()
            .get(usize::try_from(capture.index).unwrap())
            .map(|s| s.as_str())
    }
}

pub struct ChunkBytes<'a> {
    pub chunks: Chunks<'a>,
}

impl<'a> Iterator for ChunkBytes<'a> {
    type Item = &'a [u8];
    fn next(&mut self) -> Option<Self::Item> {
        self.chunks.next().map(str::as_bytes)
    }
}

pub struct RopeProvider<'a>(pub RopeSlice<'a>);

impl<'a> TextProvider<'a> for RopeProvider<'a> {
    type I = ChunkBytes<'a>;

    fn text(&mut self, node: Node) -> Self::I {
        let fragment = self.0.byte_slice(node.start_byte()..node.end_byte());
        ChunkBytes {
            chunks: fragment.chunks(),
        }
    }
}
