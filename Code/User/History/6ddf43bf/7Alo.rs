use fscx_rs::file::read_to_string;
use std::path::PathBuf;
use tree_sitter::{Language, Query};

use ropey::Rope;

pub struct Document {
    pub contents: Rope,
    pub language: Language,
    pub query: Query,
}

impl Document {
    pub fn new(initial_contents: String) -> Self {
        Document {
            contents: Rope::from(initial_contents),
        }
    }

    pub fn from_file(file: PathBuf) -> Self {
        let file = read_to_string(file).unwrap();
        Document {
            contents: Rope::from(file),
        }
    }
}
