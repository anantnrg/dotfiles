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

}