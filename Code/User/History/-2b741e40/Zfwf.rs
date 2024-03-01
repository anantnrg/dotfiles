use std::path::{Path, PathBuf};

use lexiq::grammar::Grammar;

fn main() {
    let grammar = Grammar::new(PathBuf::from(
        Path::new(&file!())
            .parent()
            .unwrap()
            .join("../resources/syntaxes/rust.yaml"),
    ));
}
