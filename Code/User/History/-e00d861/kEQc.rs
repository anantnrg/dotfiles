use fscx_rs::file::read_to_string;
use std::{
    fs::File,
    io::Read,
    path::{Path, PathBuf},
};

use crop::Rope;

pub struct Document {
    pub contents: Rope,
}

impl Document {
    pub fn new(initial_contents: String) -> Self {
        Document {
            contents: Rope::from(initial_contents),
        }
    }

    pub fn from_file(file: PathBuf) -> Self {
        let file = read_to_string(file);
        Document {
            contents: Rope::from(file),
        }
    }
}
