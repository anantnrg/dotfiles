use std::iter::Peekable;

use freya::prelude::*;
use ropey::RopeSlice;
use synk_core::highlighter::TSParser;
use tree_sitter::{Query, QueryMatches, TextProvider};

use crate::colors::EditorColors;

#[allow(non_snake_case)]
#[component]
pub fn Line<T>(
    start_byte: usize,
    line: RopeSlice<'static>,
    colors: EditorColors,
    query: Query,
    matches: &'static mut Peekable<QueryMatches<'static, 'static, T>>,
) -> Element
where
    T: TextProvider<'a>,
{
    rsx! {
        rect {
            background: "{colors.background}",
            width: "100%",
            height: "40",
            direction: "horizontal",
            cross_align: "center",
            paragraph { width: "100%", max_lines: "1", font_size: "16", font_family: "JetBrains Mono",
                for (byte_idx , char) in line.chars().enumerate() {
                    {
                        let scope = TSParser::get_scope(&query, &mut matches, line_start_byte + byte_idx).unwrap_or("".to_string());
                        let color = theme.get_char_style(scope);
                        rsx!(
                            text {
                                color: "{color.color}",
                                font_weight: "{color.weight}",
                                "{char}"
                            }
                        )
                    }
                }
            }
        }
    }
}
