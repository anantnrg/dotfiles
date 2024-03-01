use regex::{Match, Regex};

#[derive(Debug, Clone)]
pub struct Grammar {
    pub name: String,
    pub extensions: Vec<String>,
    pub rules: Vec<Rule>,
    pub sorted: bool,
}

#[derive(Debug, Clone)]
pub struct Rule {
    pub regex: String,
    pub scope: String,
    pub precedence: usize,
}

#[derive(Debug, Clone)]
pub struct Token {
    pub start: usize,
    pub end: usize,
    pub scope: String,
}

#[derive(Debug, Clone)]
pub struct CompiledGrammar {
    pub rules: Vec<CompiledRule>,
}

#[derive(Debug, Clone)]
pub struct CompiledRule {
    pub regex: Regex,
    pub scope: String,
}

#[macro_export]
macro_rules! rule {
    ($regex:expr, $scope:expr, $precedence:expr) => {
        Rule {
            regex: $regex.to_string(),
            scope: $scope.to_string(),
            precedence: $precedence,
        }
    };
}

impl Grammar {
    pub fn sort(&mut self) {
        self.rules.sort_by_key(|rule| rule.precedence);
    }

    pub fn compile(&mut self) -> CompiledGrammar {
        if !self.sorted {
            self.sort();
            self.sorted = true;
        }
        let mut compiled_rules = Vec::new();

        for rule in &self.rules {
            if let Ok(regex) = Regex::new(&rule.regex) {
                compiled_rules.push(CompiledRule {
                    regex,
                    scope: rule.scope.clone(),
                })
            } else {
                // TODO: Properly handle errors, maybe through anyhow
                println!("failed to compile regex: {}", rule.regex);
            }
        }

        CompiledGrammar {
            rules: compiled_rules,
        }
    }
}

impl CompiledGrammar {
    pub fn tokenize<S: AsRef<str>>(&mut self, input: S) -> Vec<Token> {
        let input = input.as_ref();
        let mut tokens: Vec<Token> = Vec::new();
        let mut cursor = 0usize;

        while cursor < input.len() {
            let mut found = false;
            for rule in &self.rules {
                if let Ok(Some(mat)) = rule.regex.find(&input[cursor..]) {
                    if mat.start() != 0 {
                        continue;
                    }
                    let start = cursor + mat.start();
                    let end = cursor + mat.end();

                    if !tokens
                        .iter()
                        .any(|token| token.start <= start && token.end >= end)
                    {
                        found = true;
                        tokens.push(Token {
                            start,
                            end,
                            scope: rule.scope.clone(),
                        });
                        cursor = end;
                        break;
                    }
                }
            }
            if !found {
                cursor += 1; // No match found, advance cursor
            }
        }

        tokens
    }
}
