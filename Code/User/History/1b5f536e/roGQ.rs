use crate::grammar::{Grammar, Rule};
use crate::rule;

pub struct RustLang;

const COMMENTS: usize = 0;
const STRINGS: usize = 1;
const KEYWORDS: usize = 2;
const TYPES: usize = 3;
const LIFETIMES: usize = 4;
const IDENTIFIERS: usize = 5;
const NUMBERS: usize = 6;
const PUNCTUATION: usize = 7;

impl RustLang {
    pub fn grammar() -> Grammar {
        let mut rules = Vec::new();
        rules.extend(Self::identifiers());
        rules.extend(Self::keywords());
        rules.extend(Self::types());
        rules.extend(Self::comments());
        rules.extend(Self::data());
        rules.extend(Self::punctuation());
        Grammar {
            name: String::from("Rust"),
            extensions: vec![String::from("rs")],
            rules,
            sorted: false,
        }
    }
    pub fn identifiers() -> Vec<Rule> {
        vec![
            rule!(
                r#"\b[a-z_][a-z0-9_]*\b"#,
                "identifiers.snakecase",
                IDENTIFIERS
            ),
            rule!(
                r#"\b[A-Z][a-z0-9]*([A-Z][a-z0-9]*)*\b"#,
                "identifiers.camelcase",
                IDENTIFIERS
            ),
            rule!(
                r#"\b[A-Z_]*[A-Z][A-Z0-9_]*\b"#,
                "identifiers.upper-snakecase",
                IDENTIFIERS
            ),
        ]
    }
    pub fn keywords() -> Vec<Rule> {
        let keywords = Vec::new();
        let control_flow = vec![
            rule!(r#"\bbreak\b"#, "keywords.flow.break", KEYWORDS),
            rule!(r#"\bif\b"#, "keywords.flow.if", KEYWORDS),
            rule!(r#"\belse\b"#, "keywords.flow.else", KEYWORDS),
            rule!(r#"\bfor\b"#, "keywords.flow.for", KEYWORDS),
            rule!(r#"\bwhile\b"#, "keywords.flow.while", KEYWORDS),
            rule!(r#"\bwhere\b"#, "keywords.flow.where", KEYWORDS),
            rule!(r#"\bcontinue\b"#, "keywords.flow.continue", KEYWORDS),
        ];
        let types = vec![
            rule!(r#"\bas\b"#, "keywords.types.as", KEYWORDS),
            rule!(r#"\benum\b"#, "keywords.types.enum", KEYWORDS),
            rule!(r#"\bstruct\b"#, "keywords.types.struct", KEYWORDS),
            rule!(r#"\btrait\b"#, "keywords.types.trait", KEYWORDS),
            rule!(r#"\btype\b"#, "keywords.types.type", KEYWORDS),
        ];
        let decls = vec![
            rule!(r#"\bconst\b"#, "keywords.decls.const", KEYWORDS),
            rule!(r#"\bfn\b"#, "keywords.decls.function", KEYWORDS),
        ];
        let module = vec![
            rule!(r#"\bmod\b"#, "keywords.module.mod", KEYWORDS),
            rule!(r#"\bcrate\b"#, "keywords.module.crate", KEYWORDS),
            rule!(r#"\bextern\b"#, "keywords.module.extern", KEYWORDS),
            rule!(r#"\bsuper\b"#, "keywords.module.super", KEYWORDS),
            rule!(r#"\buse\b"#, "keywords.module.use", KEYWORDS),
        ];
        let values = vec![
            rule!(r#"\btrue\b"#, "keywords.values.true", KEYWORDS),
            rule!(r#"\bfalse\b"#, "keywords.values.false", KEYWORDS),
        ];
        keywords
    }
    pub fn types() -> Vec<Rule> {
        vec![rule!(
            r#"\b[iu](?:8|16|32|64|128|size)\b"#,
            "types.integer",
            TYPES
        )]
    }
    pub fn punctuation() -> Vec<Rule> {
        vec![]
    }
    pub fn data() -> Vec<Rule> {
        vec![
            rule!(
                r#"\b\d+(?:_\d+)*(?:_[uUiIfF](?:8|16|32|64|size)?)?\b"#,
                "data.decimal",
                NUMBERS
            ),
            rule!(r#"\b\d+(\.\d+)?[eE][+-]?\d+\b"#, "data.float", NUMBERS),
            rule!(r#"\b'\w+"\b"#, "data.lifetime", LIFETIMES),
        ]
    }
    pub fn comments() -> Vec<Rule> {
        vec![
            rule!(r#"\/\/.*"#, "comments.line", COMMENTS),
            rule!(
                r#"\/\*[^*]*\*+([^/*][^*]*\*+)*\/"#,
                "comments.block",
                COMMENTS
            ),
        ]
    }
}
