use crate::Progress;
use anyhow::anyhow;
use anyhow::Result;
use std::fs::remove_file;
use std::fs::File;
use std::io::{self, Read, Write};
use std::path::Path;

pub fn copy<S, D, P>(
    src: S,
    dest: D,
    overwrite: bool,
    progress: Option<P>,
    buff_size: Option<usize>,
) -> Result<()>
where
    S: AsRef<Path>,
    D: AsRef<Path>,
    P: Fn(Progress),
{
    let mut buff = match buff_size {
        Some(0) => vec![0; 524288],
        Some(size) => vec![0; size * 1024],
        None => vec![0; 524288],
    };

    let mut source_file = File::open(src)?;
    let mut dest_file: File;
    let total_bytes = source_file.metadata()?.len();
    let mut processed_bytes = 0;
    let mut percentage: u64;

    if overwrite || std::fs::metadata(&dest).is_err() {
        dest_file = std::fs::File::create(&dest)?;
    } else {
        return Err(anyhow!("File exists"));
    }

    loop {
        match source_file.read(&mut buff) {
            Ok(0) => break,
            Ok(bytes) => {
                dest_file.write_all(&buff[..bytes])?;
                processed_bytes += bytes as u64;
                percentage = if total_bytes > 0 {
                    (processed_bytes * 100) / total_bytes
                } else {
                    100
                };

                if let Some(callback) = &progress {
                    callback(Progress {
                        processed_bytes,
                        total_bytes,
                        percentage,
                    });
                }
            }
            Err(err) => {
                return Err(anyhow!(
                    "ERROR: An error occurred while attempting to copy the file: {}",
                    err
                ))
            }
        }
        println!()
    }

    Ok(())
}

pub fn move_to<S, D, P>(
    src: S,
    dest: D,
    overwrite: bool,
    progress: Option<P>,
    buff_size: Option<usize>,
) -> Result<()>
where
    S: AsRef<Path>,
    D: AsRef<Path>,
    P: Fn(Progress),
{
    copy(&src, dest, overwrite, progress, buff_size)?;

    remove(src)?;

    Ok(())
}

pub fn remove<P>(path: P) -> Result<()>
where
    P: AsRef<Path>,
{
    if path.as_ref().exists() {
        Ok(remove_file(path)?)
    } else {
        Ok(())
    }
}

pub fn read_to_string<P>(path: P) -> Result<String>
where
    P: AsRef<Path>,
{
    match std::fs::metadata(&path) {
        Ok(metadata) => {
            if metadata.is_file() {
                return Ok(std::fs::read_to_string(path)?);
            } else {
                Err(anyhow!("Path is not a file!"))
            }
        }
        Err(e) => Err(anyhow!("File doesn't exist: {}", e)),
    }
}

pub fn write<P>(path: P, content: &str) -> Result<()>
where
    P: AsRef<Path>,
{
    match std::fs::metadata(&path) {
        Ok(metadata) => {
            if metadata.is_file() {
                let mut file = std::fs::File::create(path)?;
                file.write_all(content.as_bytes())?;
                Ok(())
            } else {
                Err(anyhow!("Path is not a file!"))
            }
        }
        Err(e) => Err(anyhow!("File doesn't exist: {}", e)),
    }
}

pub fn create<P>(path: P) -> Result<()>
where
    P: AsRef<Path>,
{
    match std::fs::metadata(&path) {
        Ok(_) => Err(anyhow!("File exists!")),
        Err(_) => {
            std::fs::File::create_new(path)?;
            Ok(())
        }
    }
}
