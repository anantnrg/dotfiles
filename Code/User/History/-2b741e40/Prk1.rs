use std::{fs::File, path::{Path, PathBuf}};

use lexiq::grammar::Grammar;

fn main() {
    let mut file = String::new();
        File::open(grammar)
            .expect("Couldn't find the specified grammar file")
            .read_to_string(&mut file)
            .expect("Couldn't parse the given file");

        let grammar = serde_yaml::from_str(&file)
            .expect("Failed to parse into struct Grammar. Is the file a YAML file?");

        println!("{:?}", grammar);
}
