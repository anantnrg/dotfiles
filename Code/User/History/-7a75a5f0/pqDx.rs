pub mod grammar;

use grammar::Grammar;

pub struct Lexiq {
    pub language: String,
    pub grammar: Grammar,
}
