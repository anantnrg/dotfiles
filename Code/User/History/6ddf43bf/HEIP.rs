use fscx_rs::file::read_to_string;
use std::path::PathBuf;

use ropey::Rope;

use crate::treesitter::TSParser;

pub struct Document {
    pub contents: Rope,
    pub ts_parser: TSParser,
}

impl Document {
    pub fn new(initial_contents: String) -> Self {
        let contents = Rope::from(initial_contents);
        let ts_parser = TSParser::new(Languages::Rust, rope);
        Document {
            contents,
            ts_parser,
        }
    }

    pub fn from_file(file: PathBuf) -> Self {
        let file = read_to_string(file).unwrap();
        Document {
            contents: Rope::from(file),
        }
    }
}
