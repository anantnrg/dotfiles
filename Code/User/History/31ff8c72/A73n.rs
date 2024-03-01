use crate::Progress;
use std::path::Path;
use std::io::{Read, Write, self};
use std::fs::File;

pub fn copy<S, D>(src: S, dest: D, overwrite: bool, progress: Option<Box<dyn Fn(Progress)>>, buff_size: Option<usize>, preserve_timestamps: Option<bool>)
where
    S: AsRef<Path>,
    D: AsRef<Path>,
{
    let source_file = File::open(src);
    
    if
}
