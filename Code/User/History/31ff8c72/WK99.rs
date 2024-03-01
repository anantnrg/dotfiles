use crate::Progress;
use std::path::Path;

pub fn copy<S, D>(src: S, dest: D, progress: Option<Box<dyn Fn(Progress)>>, buff_size: Option<usize>, preserve_timestamps: Option<bool>)
where
    S: AsRef<Path>,
    D: AsRef<Path>,
{
    let source =
}
