use lexiq::grammars::rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    grammar.sort();
    let regexes = grammar
        .compile()
        .tokenize("// thfis is a comment\n/* Block comment */");
    println!("{regexes:?}");
}