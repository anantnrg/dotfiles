use crate::Progress;
use anyhow::anyhow;
use anyhow::Result;
use std::fs::File;
use std::io::{self, Read, Write};
use std::path::Path;

pub fn copy<S, D>(
    src: S,
    dest: D,
    overwrite: bool,
    progress: Option<Box<dyn Fn(Progress)>>,
    buff_size: Option<usize>,
    preserve_timestamps: Option<bool>,
) -> Result<()>
where
    S: AsRef<Path>,
    D: AsRef<Path>,
{
    let buff = match buff_size {
        Some(0) => vec![0; 524288],
        Some(size) => vec![0; size * 1024],
        None => vec![0; 524288],
    };

    let source_file = File::open(src)?;

    if overwrite || std::fs::metadata(&dest).is_err() {
        let dest_file = std::fs::File::create(&dest)?;
    } else {
        return Err(anyhow!("File exists"));
    }

    Ok(())
}
