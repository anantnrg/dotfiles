pub mod colors;
pub mod window;
pub mod opengl;

use opengl::GLBackend;
use window::options::WindowOptions;

pub struct Ui {
    // TODO: We should probably make this renderer agnostic. 
    pub backend: GLBackend
}

impl Ui {
    pub fn new() -> Ui {
        Ui {
            backend: GLBackend::new(WindowOptions::new()).expect("Couldnt initialize OpenGL (ES) backend!")
        }
    }
    pub fn run(&mut self) {}
}
