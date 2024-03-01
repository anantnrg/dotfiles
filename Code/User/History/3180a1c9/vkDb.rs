use lexiq::grammars::rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    grammar.sort();
    let regexes = grammar.compile().tokenize(
        r#"// thfis is a comment
        MORE_CODE
        name_code 
        CamelCase"#,
    );
    println!("{regexes:?}");
}
