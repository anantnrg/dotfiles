use nom::{
    branch::alt,
    bytes::complete::{is_not, tag, take_while, take_while1},
    character::complete::{char, digit1, multispace0, newline},
    combinator::{map, opt, recognize},
    multi::separated_list0,
    sequence::{delimited, preceded, tuple},
    IResult,
};

use std::collections::HashMap;

#[derive(Debug)]
enum ConfigValue {
    Float(f64),
    Integer(i64),
    Boolean(bool),
    String(String),
    Struct(HashMap<String, ConfigValue>),
}

fn parse_float(input: &str) -> IResult<&str, ConfigValue> {
    map(
        recognize(tuple((opt(char('-')), digit1, char('.'), digit1))),
        |s: &str| ConfigValue::Float(s.parse::<f64>().unwrap()),
    )(input)
}

fn parse_integer(input: &str) -> IResult<&str, ConfigValue> {
    map(recognize(tuple((opt(char('-')), digit1))), |s: &str| {
        ConfigValue::Integer(s.parse::<i64>().unwrap())
    })(input)
}

fn parse_boolean(input: &str) -> IResult<&str, ConfigValue> {
    alt((
        map(tag("true"), |_| ConfigValue::Boolean(true)),
        map(tag("false"), |_| ConfigValue::Boolean(false)),
    ))(input)
}

fn parse_string(input: &str) -> IResult<&str, ConfigValue> {
    map(delimited(char('"'), is_not("\""), char('"')), |s: &str| {
        ConfigValue::String(s.to_string())
    })(input)
}

fn parse_struct(input: &str) -> IResult<&str, ConfigValue> {
    map(
        delimited(
            char('{'),
            separated_list(newline, parse_key_value),
            char('}'),
        ),
        |vec| {
            let mut map = HashMap::new();
            for (key, value) in vec {
                map.insert(key, value);
            }
            ConfigValue::Struct(map)
        },
    )(input)
}

fn parse_key_value(input: &str) -> IResult<&str, (String, ConfigValue)> {
    tuple((
        multispace0,
        parse_string,
        multispace0,
        char('='),
        multispace0,
        parse_value,
    ))(input)
    .map(|(remaining, (key, value))| (remaining, (key, value)))
}

fn parse_value(input: &str) -> IResult<&str, ConfigValue> {
    alt((
        parse_float,
        parse_integer,
        parse_boolean,
        parse_string,
        parse_struct,
    ))(input)
}

fn main() {
    let input = r#"
{
    version = 0.0.1,
    number = 2,
    boolean = true,
    string = "this is a string",
    struct = {
        key = "structs can hold all other values"
    }
}
"#;

    match parse_struct(input) {
        Ok((_, parsed_config)) => println!("{:?}", parsed_config),
        Err(err) => eprintln!("Error: {:?}", err),
    }
}
