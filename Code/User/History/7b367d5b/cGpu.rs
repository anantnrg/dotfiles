use freya::prelude::*;

#[allow(non_snake_case)]
#[component]
pub fn Statusbar() -> Element {
    rsx! { rect { width: "100%", height: "60" } }
}