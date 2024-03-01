use fscx_rs::{file, Progress};

fn main() -> anyhow::Result<()> {
    let result = file::copy(
        "path/to/source/file.txt",
        "path/to/destination/file.txt",
        false,
        Some(|progress: Progress| {
            println!(
                "\rCopying: {}% ({}/{})",
                progress.percentage, progress.processed_bytes, progress.total_bytes
            );
            // You can also update a progress bar or perform other actions based on the progress
        }),
        None,
        Some(true),
    );

    match result {
        Ok(()) => println!("Copy completed successfully"),
        Err(err) => eprintln!("Error: {}", err),
    }
}
