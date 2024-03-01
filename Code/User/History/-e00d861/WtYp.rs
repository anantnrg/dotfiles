pub mod document;
pub mod highlighter;

use document::Document;

pub struct Core<'a> {
    pub documents: Vec<Document<'a>>,
}

impl<'a> Core<'a> {
    pub fn new() -> Self {
        Core {
            documents: vec![Document::new(
                "fn main() {
    println!(\"Hello world!\");
}"
                .to_string(),
            )],
        }
    }
}
