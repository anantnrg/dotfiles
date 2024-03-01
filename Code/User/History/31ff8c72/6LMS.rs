use crate::Progress;
use anyhow::anyhow;
use anyhow::Result;
use std::fs::File;
use std::io::{self, Read, Write};
use std::path::Path;

pub fn copy<S, D, P>(
    src: S,
    dest: D,
    overwrite: bool,
    progress: Option<P>,
    buff_size: Option<usize>,
    preserve_timestamps: Option<bool>,
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
    let src_path = src.as_ref();
    let dest_path = dest.as_ref();
    let mut source_file = File::open(src)?;
    let mut dest_file: File;
    let total_bytes = source_file.metadata()?.len();
    let mut processed_bytes = 0;
    let mut percentage = 0;

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
                return Err(anyhow!(format!(
                    "ERROR: An error occurred while attempting to copy the file: {}",
                    err
                )))
            }
        }
        println!()
    }

    if let Some(true) = preserve_timestamps {
        if let Ok(metadata) = src_path.metadata() {
            let access_time = metadata.accessed()?;
            let modified_time = metadata.modified()?;

            std::fs::set_access_time(&dest_path, access_time)?;
            std::fs::set_modified_time(&dest_path, modified_time)?;
        }
    }

    Ok(())
}