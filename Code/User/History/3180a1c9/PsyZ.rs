use lang_rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    let regexes = grammar.compile().tokenize(
        r#"// thfis is a comment
/* Block comment */
hello_world
HelloWolrd
HELOO_WROLD
i32
32
as
break
let mut hellow = "hello";
# !"#,
    );
    println!("{regexes:?}");
}
