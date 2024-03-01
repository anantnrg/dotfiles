use nom::character::complete::digit0;
use nom::{bytes::complete::tag, IResult};
use std::error::Error;

pub fn parse_string(input: &str) -> IResult<&str, &str> {
    digit0(input)
}

pub fn parse() -> Result<(), Box<dyn Error>> {
    let (remaining_input, output) = parse_string("1")?;
    assert_eq!(output, "1");
    Ok(())
}
