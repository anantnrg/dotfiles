use nom::character::complete::digit0;
use nom::{bytes::complete::tag, IResult};
use std::error::Error;

pub fn parse_number(input: &str) -> IResult<&str, u32> {
    digit0(input)
}

pub fn parse_string(input: &str) -> IResult<&str, &str> {
    digit0(input)
}

pub fn parse() -> Result<(), Box<dyn Error>> {
    let (remaining_input, output) = parse_number("abs1")?;
    println!("remaining input: {}\noutput: {}", remaining_input, output);
    Ok(())
}
