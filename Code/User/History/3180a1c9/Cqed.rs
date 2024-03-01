use lexiq::grammars::rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    grammar.sort();
    let regexes = grammar.compile().tokenize(
        "// thfis is a comment\n/* Block comment */\nhello_world\nHelloWolrd\nHELOO_WROLD\ni32\nu32\n0.32e32E3\n120",
    );
    println!("{regexes:?}");
}
