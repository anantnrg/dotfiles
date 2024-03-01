pub mod colors;
pub mod window;
pub mod opengl;

pub struct Ui {
    // TODO: 
    pub backend: GLBackend
}

impl Ui {
    pub fn new() -> Ui {
        Ui {}
    }
    pub fn run(&mut self) {}
}
