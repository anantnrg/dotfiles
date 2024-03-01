use freya::prelude::*;

use crate::colors::SidebarColors;

#[allow(non_snake_case)]
#[component]
pub fn Sidebar(colors: SidebarColors, width: Signal<usize>) -> Element {
    rsx! { rect { width: "{width.read()}", height: "100%", background: "300321#" } }
}
