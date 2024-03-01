use std::path::{Path, PathBuf};

use lexiq::{grammar::Grammar, Lexiq};

fn main() {
    let grammar = Grammar::new(PathBuf::from(Path::new(&file!())"../resources/syntaxes/rust.yaml"));

    let parse = Lexiq::new(String::from("Rust"), grammar);
}