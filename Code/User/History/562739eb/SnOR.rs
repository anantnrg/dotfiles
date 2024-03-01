pub mod file;

pub struct Progress {
    pub total_bytes: u64,
    pub processed_bytes: u64,
    pub percentage: u64,
}
