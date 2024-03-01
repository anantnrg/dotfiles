use anyhow::Result;
use freya::dioxus::events::HeadExtension;

#[derive(Clone)]
pub enum Color {
    Hex(&'static str),
    Rgba(u8, u8, u8, u8),
    Rgb(u8, u8, u8),
}

impl Color {
    pub fn default_hex() -> Self {
        Color::Hex("#1e1d2d")
    }

    pub fn default_rgb() -> Self {
        Color::Rgb(30, 29, 45)
    }

    pub fn default_rgba() -> Self {
        Color::Rgba(30, 29, 45, 100)
    }
    pub fn into(self) -> Result<String> {
        match self {
            Color::Hex(hex) => {
                let hex = hex.strip_prefix("#").unwrap_or(hex);

                if hex.len() != 6 && hex.len() != 3 && hex.len() != 8 {
                    return Err(anyhow::anyhow!("Invalid length for hex color. Must be 3, 6 or 8 characters long (excluding the # symbol if any)"));
                } else if hex.len() == 3 {
                    let red =
                        u8::from_str_radix(&format!("{}{}", &hex[0..1], &hex[0..1]), 16).unwrap();
                    let green =
                        u8::from_str_radix(&format!("{}{}", &hex[1..2], &hex[1..2]), 16).unwrap();
                    let blue =
                        u8::from_str_radix(&format!("{}{}", &hex[2..3], &hex[2..3]), 16).unwrap();

                    return Ok(format!("rgb{}{}{}", red, green, blue));
                } else if hex.len() == 6 {
                    let red = u8::from_str_radix(&hex[0..2], 16).unwrap();
                    let green = u8::from_str_radix(&hex[2..4], 16).unwrap();
                    let blue = u8::from_str_radix(&hex[4..6], 16).unwrap();

                    return Ok(format!("rgb{}{}{}", red, green, blue));
                } else if hex.len() == 8 {
                    let red = u8::from_str_radix(&hex[0..2], 16).unwrap();
                    let green = u8::from_str_radix(&hex[2..4], 16).unwrap();
                    let blue = u8::from_str_radix(&hex[4..6], 16).unwrap();
                    let alpha = u8::from_str_radix(&hex[6..8], 16).unwrap();

                    return Ok(format!("rgb{}{}{}{}", red, green, blue, alpha));
                }

                Ok(format!("rgb{}{}{}", 0, 0, 0))
            }
            Color::Rgb(red, green, blue) => Ok(format!("rgb{}{}{}", red, green, blue)),
            Color::Rgba(red, green, blue, alpha) => {
                Ok(format!("rgb{}{}{}{}", red, green, blue, alpha))
            }
        }
    }
}

pub struct Colors {
    pub background: Color,
    pub foreground: Color,
    pub line_numbers: LineNumberColors,
    pub sidebar: SidebarColors,
}

pub struct LineNumberColors {
    pub line_numbers_bg: Color,
    pub line_numbers_fg: Color,
    pub line_numbers_edited_fg: Color,
    pub line_numbers_deleted_fg: Color,
    pub line_numbers_added_fg: Color,
}

pub struct SidebarColors {
    pub background: Color,
    pub foreground: Color,
    pub tab_bar_bg: Color,
    pub tab_bar_fg: Color,
    pub tab_fg: Color,
    pub tab_bg: Color,
}

impl Colors {
    pub fn new() -> Self {
        Colors {
            background: Color::Hex("#1e1d2d"),
            foreground: Color::Hex("#cdd6f4"),
            line_numbers: LineNumberColors {
                line_numbers_bg: Color::Hex("#1e1d2d"),
                line_numbers_fg: Color::Hex("#6c7086"),
                line_numbers_added_fg: Color::Hex("#a6e3a1"),
                line_numbers_edited_fg: Color::Hex("#f9e2af"),
                line_numbers_deleted_fg: Color::Hex("#f38ba8"),
            },
            sidebar: SidebarColors {
                
            }
        }
    }
}