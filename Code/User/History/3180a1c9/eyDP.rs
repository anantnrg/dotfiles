use lexiq::grammars::rust::RustLang;

fn main() {
    let mut grammar = RustLang::grammar();
    grammar.sort();
    let regexes = grammar.compile().tokenize(
        r#"// thfis is a comment
        MORE_CODE 
        name_code  
        CamelCase 
        i32 
        f32 
        423_u32 
        4221f64 
        'lifetime 
        2.03e21 "#,
    );
    println!("{regexes:?}");
}
