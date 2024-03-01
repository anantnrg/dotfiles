use lang_rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    let regexes = grammar.compile().tokenize(
        r#"// thfis is a comment
/* Block comment */
let mut hellow = "hello";"#,
    );
    println!("{regexes:?}");
}
