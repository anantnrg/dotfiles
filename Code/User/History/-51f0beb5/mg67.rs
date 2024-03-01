use lexiq::grammar::{Grammar, Rule};
use lexiq::rule;

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
        let mut keywords = Vec::new();
        let control_flow = vec![
            rule!(r#"\bbreak\b"#, "keywords.flow.break", KEYWORDS),
            rule!(r#"\bif\b"#, "keywords.flow.if", KEYWORDS),
            rule!(r#"\belse\b"#, "keywords.flow.else", KEYWORDS),
            rule!(r#"\bfor\b"#, "keywords.flow.for", KEYWORDS),
            rule!(r#"\bwhile\b"#, "keywords.flow.while", KEYWORDS),
            rule!(r#"\bwhere\b"#, "keywords.flow.where", KEYWORDS),
            rule!(r#"\bcontinue\b"#, "keywords.flow.continue", KEYWORDS),
            rule!(r#"\bloop\b"#, "keywords.flow.loop", KEYWORDS),
            rule!(r#"\bmatch\b"#, "keywords.flow.match", KEYWORDS),
            rule!(r#"\bmove\b"#, "keywords.flow.move", KEYWORDS),
        ];
        let decls = vec![
            rule!(r#"\bconst\b"#, "keywords.decls.const", KEYWORDS),
            rule!(r#"\bfn\b"#, "keywords.decls.function", KEYWORDS),
            rule!(r#"\bas\b"#, "keywords.decls.as", KEYWORDS),
            rule!(r#"\benum\b"#, "keywords.decls.enum", KEYWORDS),
            rule!(r#"\bstruct\b"#, "keywords.decls.struct", KEYWORDS),
            rule!(r#"\btrait\b"#, "keywords.decls.trait", KEYWORDS),
            rule!(r#"\btype\b"#, "keywords.decls.type", KEYWORDS),
        ];
        let module = vec![
            rule!(r#"\bmod\b"#, "keywords.module.mod", KEYWORDS),
            rule!(r#"\bcrate\b"#, "keywords.module.crate", KEYWORDS),
            rule!(r#"\bextern\b"#, "keywords.module.extern", KEYWORDS),
            rule!(r#"\bsuper\b"#, "keywords.module.super", KEYWORDS),
            rule!(r#"\buse\b"#, "keywords.module.use", KEYWORDS),
        ];
        let self_ = vec![
            rule!(r#"\bself\b"#, "keywords.self.value", KEYWORDS),
            rule!(r#"\bSelf\b"#, "keywords.self.type", KEYWORDS),
        ];
        let vars = vec![
            rule!(r#"\blet\b"#, "keywords.vars.let", KEYWORDS),
            rule!(r#"\bmut\b"#, "keywords.vars.mut", KEYWORDS),
            rule!(r#"\breturn\b"#, "keywords.vars.return", KEYWORDS),
        ];
        let misc = vec![
            rule!(r#"\bunsafe\b"#, "keywords.misc.unsafe", KEYWORDS),
            rule!(r#"\basync\b"#, "keywords.misc.async", KEYWORDS),
            rule!(r#"\bawait\b"#, "keywords.misc.await", KEYWORDS),
            rule!(r#"\bdyn\b"#, "keywords.misc.dyn", KEYWORDS),
        ];
        let reserved = vec![
            rule!(r#"\babstract\b"#, "keywords.reserved.abstract", KEYWORDS),
            rule!(r#"\bbecome\b"#, "keywords.reserved.become", KEYWORDS),
            rule!(r#"\bbox\b"#, "keywords.reserved.box", KEYWORDS),
            rule!(r#"\bdo\b"#, "keywords.reserved.do", KEYWORDS),
            rule!(r#"\bfinal\b"#, "keywords.reserved.final", KEYWORDS),
            rule!(r#"\bmacro\b"#, "keywords.reserved.macro", KEYWORDS),
            rule!(r#"\boverride\b"#, "keywords.reserved.override", KEYWORDS),
            rule!(r#"\bpriv\b"#, "keywords.reserved.priv", KEYWORDS),
            rule!(r#"\btypeof\b"#, "keywords.reserved.typeof", KEYWORDS),
            rule!(r#"\bunsized\b"#, "keywords.reserved.unsized", KEYWORDS),
            rule!(r#"\bvirtual\b"#, "keywords.reserved.virtual", KEYWORDS),
            rule!(r#"\byield\b"#, "keywords.reserved.yield", KEYWORDS),
            rule!(r#"\btry\b"#, "keywords.reserved.try", KEYWORDS),
        ];
        keywords.extend(control_flow);
        keywords.extend(decls);
        keywords.extend(module);
        keywords.extend(self_);
        keywords.extend(vars);
        keywords.extend(misc);
        keywords.extend(reserved);
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
        vec![
            rule!(r"\{(?!\{)|\}(?!\})", "punctuation.curly-brace", PUNCTUATION),
            rule!(
                r"\[(?!\[)|\](?!\])",
                "punctuation.square-brace",
                PUNCTUATION
            ),
            rule!(r"\{(?!\{)|\}(?!\})", "punctuation.parentheses", PUNCTUATION),
            rule!(r"\+(?!\+)", "punctuation.plus", PUNCTUATION),
            rule!(r#"\-(?!\-)"#, "punctuation.minus", PUNCTUATION),
            rule!(r#"\*(?!\*)"#, "punctuation.star", PUNCTUATION),
            rule!(r#"\/(?!\/)"#, "punctuation.slash", PUNCTUATION),
            rule!(r#"\%(?!\%)"#, "punctuation.percent", PUNCTUATION),
            rule!(r#"\^(?!\^)"#, "punctuation.caret", PUNCTUATION),
            rule!(r#"\!(?!\!)"#, "punctuation.not", PUNCTUATION),
            rule!(r#"\&(?!\&)"#, "punctuation.and", PUNCTUATION),
            rule!(r#"\|(?!\|)"#, "punctuation.or", PUNCTUATION),
            rule!(r#"\&\&(?!\&)"#, "punctuation.and-and", PUNCTUATION),
            rule!(r#"\|\|(?!\|)"#, "punctuation.or-or", PUNCTUATION),
            rule!(r#"\<\<(?!\<)"#, "punctuation.shl", PUNCTUATION),
            rule!(r#"\>\>(?!\>)"#, "punctuation.shr", PUNCTUATION),
            rule!(r#"\+\="#, "punctuation.plus-eq", PUNCTUATION),
            rule!(r#"\-\="#, "punctuation.minus-eq", PUNCTUATION),
            rule!(r#"\/\="#, "punctuation.slash-eq", PUNCTUATION),
            rule!(r#"\%\="#, "punctuation.percent-eq", PUNCTUATION),
            rule!(r#"\^\="#, "punctuation.caret-eq", PUNCTUATION),
            rule!(r#"\&\="#, "punctuation.and-eq", PUNCTUATION),
            rule!(r#"\|\="#, "punctuation.or-eq", PUNCTUATION),
            rule!(r#"\<\<\="#, "punctuation.shl-eq", PUNCTUATION),
            rule!(r#"\>\>\="#, "punctuation.shl-eq", PUNCTUATION),
            rule!(r#"\=(?!\=)"#, "punctuation.eq", PUNCTUATION),
            rule!(r#"\=\=(?!\=)"#, "punctuation.eq-eq", PUNCTUATION),
            rule!(r#"\!\=(?!\=)"#, "punctuation.ne", PUNCTUATION),
            rule!(r#"\>(?!\>)"#, "punctuation.gt", PUNCTUATION),
            rule!(r#"\<(?!\<)"#, "punctuation.lt", PUNCTUATION),
            rule!(r#"\>\="#, "punctuation.ge", PUNCTUATION),
            rule!(r#"\<\="#, "punctuation.le", PUNCTUATION),
            rule!(r#"\@(?!\@)"#, "punctuation.at", PUNCTUATION),
            rule!(r#"\_(?!\_)"#, "punctuation.underscore", PUNCTUATION),
            rule!(r#"\.(?!\.)"#, "punctuation.dot", PUNCTUATION),
            rule!(r#"\.\.(?!\.)"#, "punctuation.dot-dot", PUNCTUATION),
            rule!(r#"\.\.\.(?!\.)"#, "punctuation.dot-dot-dot", PUNCTUATION),
            rule!(r#"\.\.\=(?!\=)"#, "punctuation.dot-dot-eq", PUNCTUATION),
            rule!(r#"\,(?!\,)"#, "punctuation.comma", PUNCTUATION),
            rule!(r#"\;(?!\;)"#, "punctuation.semi", PUNCTUATION),
            rule!(r#"\:(?!\:)"#, "punctuation.colon", PUNCTUATION),
            rule!(r#"\:\:(?!\:)"#, "punctuation.path-sep", PUNCTUATION),
            rule!(r#"\-\>(?!\>)"#, "punctuation.r-arrow", PUNCTUATION),
            rule!(r#"\=\>(?!\>)"#, "punctuation.fat-arrow", PUNCTUATION),
            rule!(r#"\#(?!\#)"#, "punctuation.pound", PUNCTUATION),
            rule!(r#"\$(?!\$)"#, "punctuation.dollar", PUNCTUATION),
            rule!(r#"\?(?!\?)"#, "punctuation.question", PUNCTUATION),
            rule!(r#"\~(?!\~)"#, "punctuation.tilde", PUNCTUATION),
        ]
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
            rule!(
                r#""(\\.|[^"\\])*"|'(\\.|[^'\\])*'|b"(\\.|[^"\\])*"|b'(\\.|[^'\\])*'|r(#*)"(\\.|[^"\\]|"(?!"\#)|\#(?!")|"(?=#[^"]*$))*"|br(#*)"(\\.|[^"\\]|"(?!"\#)|\#(?!")|"(?=#[^"]*$))*""#,
                "data.alphabetical",
                STRINGS
            ),
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
