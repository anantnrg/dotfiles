use crate::Progress;
use std::path::Path;

pub fn copy<S, D>(src: S, dest: D, progress: Option<Box<dyn Fn(Progress)>>, buff_size: Option<usize>, )
where
    S: AsRef<Path>,
    D: AsRef<Path>,
{
}
