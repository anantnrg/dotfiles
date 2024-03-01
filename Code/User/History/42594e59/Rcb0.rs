use fscx_rs::{file, Progress};

fn main() -> anyhow::Result<()> {
    file::copy(
        "/home/mik3y/projects/Repos/fscx-rs/examples/test.txt",
        "/home/mik3y/projects/Repos/fscx-rs/examples/file.txt",
        true,
        Some(|progress: Progress| {
            println!(
                "\rCopying: {}% ({}/{})",
                progress.percentage, progress.processed_bytes, progress.total_bytes
            );
        }),
        None,
    )
}
