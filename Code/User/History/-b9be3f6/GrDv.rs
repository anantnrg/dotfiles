pub mod colors;
pub mod opengl;
pub mod window;

use opengl::GLBackend;
use window::options::WindowOptions;

pub struct Ui {
    // TODO: We should probably make this renderer agnostic.
    pub backend: GLBackend,
}

impl Ui {
    pub fn new() -> Ui {
        Ui {
            backend: GLBackend::new(WindowOptions::default())
                .expect("Couldnt initialize OpenGL (ES) backend!"),
        }
    }
    pub fn run(&mut self) {
        self.backend.run().expect("Couldnt run app");
    }
}
