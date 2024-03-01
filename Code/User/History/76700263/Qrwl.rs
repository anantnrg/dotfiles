// Main config struct
pub struct Config {
	pub autostart: Vec<String>,
}

// General config struct
pub struct General {
	pub workspaces: u32,
	pub gaps_in: u32,
	pub gaps_out: u32,
	pub kb_repeat: (u32, u32),
}

// Borders config struct
pub struct Borders {
	pub enabled: bool,
	pub width: u32,
	pub active: String,
	pub inactive: String,
	pub radius: u32,
}

// Window config struct
pub struct Window {
    pub opacity: u32
}

// Blur config struct
pub struct Blur {
    pub enabled: bool,
    pub size: u32,
    pub passes: u32,
    pub optimize: bool
}

// Shadow config struct
pub struct Shadow {
    pub enabled: bool,
    pub size: u32,
    pub blur: u32,
    pub color: String
}
