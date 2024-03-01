use std::io::Read;

use serde::Deserialize;

// Main config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Config {
	pub autostart: Vec<String>,
	pub general: General,
	pub borders: Borders,
	pub window: Window,
	pub blur: Blur,
	pub shadow: Shadow,
	pub tiling: Tiling,
	pub animations: Animations,
}

// General config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct General {
	pub workspaces: u8,
	pub gaps_in: i32,
	pub gaps_out: i32,
	pub kb_repeat: [i32; 2],
}

// Borders config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Borders {
	pub enabled: bool,
	pub width: u32,
	pub active: String,
	pub inactive: String,
	pub radius: u32,
}

// Window config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Window {
	pub opacity: u32,
}

// Blur config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Blur {
	pub enabled: bool,
	pub size: u32,
	pub passes: u32,
	pub optimize: bool,
}

// Shadow config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Shadow {
	pub enabled: bool,
	pub size: u32,
	pub blur: u32,
	pub color: String,
}

// Tiling config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Tiling {
	pub layout: String,
}

// Animations config struct
#[derive(Deserialize, Debug, PartialEq, Eq)]
pub struct Animations {
	pub enabled: bool,
}

// Bindings config struct
pub struct Bindings {
	binds: Vec<Bind>,
}

pub struct Bind {}

impl Config {
	pub fn default() -> Config {
		Config {
			autostart: vec!["kitty --title Terminal".to_string()],
			general: General { gaps_in: 8, gaps_out: 15, kb_repeat: [500, 250], workspaces: 9 },
			borders: Borders {
				active: "#fff".to_string(),
				inactive: "#181825".to_string(),
				enabled: true,
				radius: 10,
				width: 2,
			},
			animations: Animations { enabled: true },
			blur: Blur { enabled: true, optimize: true, passes: 4, size: 2 },
			shadow: Shadow { blur: 10, color: "#fff".to_string(), enabled: true, size: 10 },
			tiling: Tiling { layout: "dwindle".to_string() },
			window: Window { opacity: 1 },
		}
	}
}

pub fn parse_config() -> anyhow::Result<()> {
	let xdg = xdg::BaseDirectories::with_prefix("strata")?;
	let config_path = xdg.find_config_file("config.kdl");

	if let Some(config_file) = config_path {
		let config_string = std::fs::read_to_string(config_file)?;
		let config: Config = kaydle::serde::de::from_str(&config_string)?;
		println!("{:?}", config);
	}

	Ok(())
}
