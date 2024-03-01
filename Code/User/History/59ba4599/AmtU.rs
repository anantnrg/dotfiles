use freya::prelude::*;
use ropey::RopeSlice;

#[allow(non_snake_case)]
#[component]
pub fn Line<'a>(start_byte: usize, line: RopeSlice<'a>) -> Element {}
