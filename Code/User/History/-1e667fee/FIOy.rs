use freya::prelude::*;
use ropey::Rope;

#[allow(non_snake_case)]
#[component]
pub fn Document(rope: Rope) -> Element {
    rsx! { rect { width: "calc(100% - 50)", height: "100%", direction: "vertical" } }
}
