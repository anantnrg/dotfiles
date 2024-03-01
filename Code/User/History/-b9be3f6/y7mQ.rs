pub mod colors;
pub mod window;
pub mod opengl;

use opengl::GLBackend;

pub struct Ui {
    // TODO: We should probably make this renderer agnostic. 
    pub backend: GLBackend
}

impl Ui {
    pub fn new() -> Ui {
        Ui {
            backend: GLBackend::new()
        }
    }
    pub fn run(&mut self) {}
}
