pub mod file;

pub struct Progress {
    total_bytes: u64,
    processed_bytes: u64,
    percentage: u64,
}
