use lexiq::grammars::rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    grammar.sort();
    let regexes = grammar.compile().tokenize(
        r#"// thfis is a comment
        /* Block comment */"#,
    );
    println!("{regexes:?}");
}