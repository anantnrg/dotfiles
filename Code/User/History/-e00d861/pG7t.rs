pub mod document;

use document::Document;

pub struct Core {
    pub documents: Vec<Document>,
}

impl Core {
    pub fn new()-> Self {
        Core {
            documents: vec![Document::from(value)]
        }
    }
}