#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct Catppuccin {
    pub rosewater: &'static str,
    pub flamingo: &'static str,
    pub pink: &'static str,
    pub mauve: &'static str,
    pub red: &'static str,
    pub maroon: &'static str,
    pub peach: &'static str,
    pub yellow: &'static str,
    pub green: &'static str,
    pub teal: &'static str,
    pub sky: &'static str,
    pub sapphire: &'static str,
    pub blue: &'static str,
    pub lavender: &'static str,
    pub text: &'static str,
    pub subtext1: &'static str,
    pub subtext0: &'static str,
    pub overlay2: &'static str,
    pub overlay1: &'static str,
    pub overlay0: &'static str,
    pub surface2: &'static str,
    pub surface1: &'static str,
    pub surface0: &'static str,
    pub base: &'static str,
    pub mantle: &'static str,
    pub crust: &'static str,
}

impl Catppuccin {
    pub fn new() -> Self {
        Catppuccin { rosewater: (), flamingo: (), pink: (), mauve: (), red: (), maroon: (), peach: (), yellow: (), green: (), teal: (), sky: (), sapphire: (), blue: (), lavender: (), text: (), subtext1: (), subtext0: (), overlay2: (), overlay1: (), overlay0: (), surface2: (), surface1: (), surface0: (), base: (), mantle: (), crust: () }
    }
}