use freya::prelude::*;
use ropey::RopeSlice;

use crate::colors::EditorColors;

#[allow(non_snake_case)]
#[component]
pub fn Line(start_byte: usize, line: RopeSlice<'static>, colors: EditorColors) -> Element {

}
