use nom::{bytes::complete::tag, IResult};
use std::error::Error;

pub fn parse_string(input: &str) -> IResult<&str, &str> {
    tag("hello")(input)
}

pub fn parse() -> Result<(), Box<dyn Error>> {
    let (remaining_input, output) = parse_string("hello")?;
    assert_eq!(remaining_input, "");
    assert_eq!(output, "hello");
    Ok(())
}
