use glow::*;
use glutin::{
    config::{ConfigTemplateBuilder, GlConfig},
    context::{ContextApi, ContextAttributesBuilder, NotCurrentGlContext},
    display::{GetGlDisplay, GlDisplay},
    surface::{GlSurface, SwapInterval},
};
use glutin_winit::{DisplayBuilder, GlWindow};
use raw_window_handle::HasRawWindowHandle;
use std::num::NonZeroU32;

pub fn launch() {
    let (gl, gl_surface, gl_context, shader_version, _window, event_loop) = {
        let event_loop = winit::event_loop::EventLoopBuilder::new().build().unwrap();
        let window_builder = winit::window::WindowBuilder::new()
            .with_title("Hello triangle!")
            .with_inner_size(winit::dpi::LogicalSize::new(1024.0, 768.0));

        let template = ConfigTemplateBuilder::new();

        let display_builder = DisplayBuilder::new().with_window_builder(Some(window_builder));

        let (window, gl_config) = display_builder
            .build(&event_loop, template, |configs| {
                configs
                    .reduce(|accum, config| {
                        if config.num_samples() > accum.num_samples() {
                            config
                        } else {
                            accum
                        }
                    })
                    .unwrap()
            })
            .unwrap();

        let raw_window_handle = window.as_ref().map(|window| window.raw_window_handle());

        let gl_display = gl_config.display();
        let context_attributes = ContextAttributesBuilder::new()
            .with_context_api(ContextApi::OpenGl(Some(glutin::context::Version {
                major: 4,
                minor: 10,
            })))
            .build(raw_window_handle);

        let not_current_gl_context = gl_display
            .create_context(&gl_config, &context_attributes)
            .unwrap();

        let window = window.unwrap();

        let attrs = window.build_surface_attributes(Default::default());
        let gl_surface = gl_display
            .create_window_surface(&gl_config, &attrs)
            .unwrap();

        let gl_context = not_current_gl_context.make_current(&gl_surface).unwrap();

        let gl = glow::Context::from_loader_function_cstr(|s| gl_display.get_proc_address(s));

        gl_surface
            .set_swap_interval(&gl_context, SwapInterval::Wait(NonZeroU32::new(1).unwrap()))
            .unwrap();

        (
            gl,
            gl_surface,
            gl_context,
            "#version 410",
            window,
            event_loop,
        )
    };
}
