use crop::{iter::Chunks, RopeSlice};

struct ChunkBytes<'a> {
    chunks: Chunks<'a>,
}

impl<'a> Iterator for ChunkBytes<'a> {
    type Item = &'a [u8];
    fn next(&mut self) -> Option<Self::Item> {
        self.chunks.next().map(str::as_bytes)
    }
}

struct RopeProvider<'a>(RopeSlice<'a>);