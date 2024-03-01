pub mod file;

pub struct Progress {
    total_bytes: u32,
    processed_bytes: u32,
    percentage: u32,
}
