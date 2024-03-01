use crop::Rope;
use freya::prelude::*;

use crate::colors::LineNumberColors;

#[allow(non_snake_case)]
#[component]
pub fn Gutter(rope: Rope, colors: LineNumberColors) -> Element {
    rsx! {
        rect { height: "100%", width: "60", direction: "vertical",
            for (line_number , _) in rope.lines().enumerate() {
                rect { width: "100%", height: "40", cross_align: "center", main_align: "center",
                    label {
                        font_family: "JetBrains Mono",
                        font_size: "16",
                        font_weight: "bold",
                        color: "rgb(147, 153, 178)",
                        "{line_number}"
                    }
                }
            }
        }
    }
}
