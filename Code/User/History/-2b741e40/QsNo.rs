use std::path::PathBuf;

use lexiq::{grammar::Grammar, Lexiq};

fn main() {
    let grammar = Grammar::new(PathBuf::from("../resources/syntaxes/rust.yaml"));

    let parse = Lexiq::new(String::from("Rust"), grammar);
}
