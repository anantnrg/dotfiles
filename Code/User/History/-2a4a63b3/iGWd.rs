use crate::window::options::WindowOptions;
use crate::window::{config::GraphicsContext, surface::SkiaSurface, Window};
use skia::{Color, Paint};
use winit::{event::Event, event::Modifiers, event::WindowEvent, event_loop::EventLoop};

pub struct GLBackend {
    pub modifiers: Modifiers,
    pub surface: SkiaSurface,
    pub window: Window,
    pub gr_context: GraphicsContext,
    pub event_loop: Option<EventLoop<()>>,
    pub background: Color,
    pub paint: Paint,
}

impl GLBackend {
    pub fn new(options: WindowOptions) -> anyhow::Result<Self> {
        let event_loop = EventLoop::new()?;
        event_loop.set_control_flow(winit::event_loop::ControlFlow::Poll);
        let window = Window::new(&event_loop, options.clone());
        let gr_context = GraphicsContext::new(&window);
        let surface = SkiaSurface::new(&window);

        let modifiers = Modifiers::default();
        let mut paint = Paint::default();

        paint.set_anti_alias(true);

        Ok(GLBackend {
            event_loop: Some(event_loop),
            window,
            gr_context,
            surface,
            modifiers,
            paint,
            background: options.background.into().unwrap(),
        })
    }

    pub fn run(&mut self) -> anyhow::Result<()> {
        let event_loop = self.event_loop.take().unwrap();
        let mut _cursor_pos = (0.0_f32, 0.0_f32);

        event_loop.run(move |event, _window_target| match event {
            Event::WindowEvent {
                window_id: _,
                event,
            } => match event {
                WindowEvent::RedrawRequested => {
                    println!("redrawing")
                }
                _ => {}
            },
            _ => {}
        })?;
        Ok(())
    }
}
