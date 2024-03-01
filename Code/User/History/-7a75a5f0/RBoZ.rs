pub mod grammar;

use grammar::Grammar;

pub struct Lexiq {
    pub language: String,
    pub grammar: Grammar,
}

impl Lexiq {
    pub fn new(language: String, grammar: Grammar) -> Self {
        Lexiq { language, grammar }
    }
}
