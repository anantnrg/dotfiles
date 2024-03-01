use fscx_rs::{file, Progress};

fn main() -> anyhow::Result<()> {
    file::copy(
        "path/to/source/file.txt",
        "path/to/destination/file.txt",
        false,
        Some(|progress: Progress| {
            println!(
                "\rCopying: {}% ({}/{})",
                progress.percentage, progress.processed_bytes, progress.total_bytes
            );
        }),
        None,
        Some(true),
    )
}
