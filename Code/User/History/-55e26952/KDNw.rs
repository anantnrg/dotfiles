use regex::Regex;

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
pub struct Match {
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
    pub precedence: usize,
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
        let mut compiled_rules = Vec::new();

        for rule in &self.rules {
            if let Ok(regex) = Regex::new(&rule.regex) {
                compiled_rules.push(CompiledRule {
                    regex,
                    scope: rule.scope.clone(),
                    precedence: rule.precedence,
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
    pub fn tokenize<S: AsRef<str>>(&mut self, input: S) -> Vec<Match> {
        let mut matches: Vec<Match> = Vec::new();
        let mut current_position = 0;

        'outer: while current_position < input.as_ref().len() {
            let mut highest_precedence = usize::MAX;
            let mut matched_rule: Option<&CompiledRule> = None;

            for rule in &self.rules {
                if rule.precedence < highest_precedence {
                    if let Some(mat) = rule.regex.find_at(input.as_ref(), current_position) {
                        let (start, end) = (mat.start(), mat.end());
                        if !matches.iter().any(|m| (m.start, m.end) == (start, end)) {
                            highest_precedence = rule.precedence;
                            matched_rule = Some(rule);
                        }
                    }
                }
            }

            if let Some(rule) = matched_rule {
                let mat = rule
                    .regex
                    .find_at(input.as_ref(), current_position)
                    .unwrap();
                let (start, end) = (mat.start(), mat.end());
                matches.push(Match {
                    start,
                    end,
                    scope: rule.scope.clone(),
                });
                current_position = end;
            } else {
                break;
            }
        }

        matches
    }
}
