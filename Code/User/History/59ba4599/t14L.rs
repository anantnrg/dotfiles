use freya::prelude::*;
use ropey::RopeSlice;

use crate::colors::EditorColors;

#[allow(non_snake_case)]
#[component]
pub fn Line(start_byte: usize, line: RopeSlice<'static>, colors: EditorColors) -> Element {
    rsx! {
        rect {
            background: "{colors.editor.background}",
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
