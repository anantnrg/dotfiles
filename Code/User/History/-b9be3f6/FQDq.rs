pub mod colors;
pub mod editor;
pub mod separator;
pub mod sidebar;
pub mod statusbar;
pub mod tab_bar;

use colors::Colors;
use freya::prelude::*;

use crate::{
    editor::Editor,
    separator::{HorizontalSeparator, VerticalSeparator},
    sidebar::Sidebar,
    statusbar::Statusbar,
    tab_bar::TabBar,
};
use synk_core::document::Document;

#[allow(non_snake_case)]
pub fn SynkUI() -> Element {
    let colors = Colors::new();
    let sidebar_width = use_signal(|| 300_isize);

    rsx! {
        rect {
            width: "100%",
            height: "100%",
            direction: "horizontal",
            background: "{colors.background}",
            color: "{colors.foreground}",
            cross_align: "center",
            font_family: "JetBrains Mono",
            overflow: "clip",
            Sidebar { width: sidebar_width, colors: colors.clone().sidebar }
            VerticalSeparator {
                colors: colors.separator.clone(),
                interactive: true,
                callback: sidebar_width,
                reverse: false
            }
            rect { width: "100%", height: "100%", direction: "vertical",
                TabBar { colors: colors.clone().tab_bar }
                HorizontalSeparator { colors: colors.separator.clone(), interactive: false, reverse: false }
                Editor { colors: colors.clone() }
                HorizontalSeparator { colors: colors.separator.clone(), interactive: false, reverse: false }
                Statusbar { colors: colors.statusbar }
            }
        }
    }
}
