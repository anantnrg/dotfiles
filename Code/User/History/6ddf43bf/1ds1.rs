use fscx_rs::file::read_to_string;
use std::path::PathBuf;

use ropey::Rope;

use crate::highlighter::{languages::Languages, TSParser};

pub struct Document<'a> {
    pub rope: Rope,
    pub ts_parser: TSParser<'a>,
}

impl<'a> Document<'a> {
    pub fn new(initial_contents: String) -> Self {
        let rope = Rope::from(initial_contents);
        let ts_parser = TSParser::get_scope(Languages::Rust, rope.clone());
        Document { rope, ts_parser }
    }

    pub fn from_file(file: PathBuf) -> Self {
        let file = read_to_string(file).unwrap();
        Self::new(file)
    }
}
