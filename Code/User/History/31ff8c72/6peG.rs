use crate::Progress;
use std::path::Path;
use std::io::{Read, Write, self};
use std::fs::File;
use anyhow::Result;

pub fn copy<S, D>(src: S, dest: D, overwrite: bool, progress: Option<Box<dyn Fn(Progress)>>, buff_size: Option<usize>, preserve_timestamps: Option<bool>) -> Result<()>
where
    S: AsRef<Path>,
    D: AsRef<Path>,
{
    let source_file = File::open(src);
    
    if overwrite || std::fs::metadata(&dest).is_err() {
        let dest_file = std::fs::File::create(&dest);
    } else {
        return Err("File exists")
    }

    Ok(())
}
