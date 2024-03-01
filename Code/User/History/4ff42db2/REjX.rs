use ui::Ui;


#[allow(dead_code)]
const APP_ID: &'static str = "synk";
const JETBRAINS_MONO: &[u8] = include_bytes!("../resources/fonts/jetbrains_mono.ttf");

fn main() {
    // let builder_hook: WindowBuilderHook = Box::new(|mut builder| {
    //     builder = builder
    //         .with_inner_size(LogicalSize::new(1400, 800))
    //         .with_active(true)
    //         .with_visible(true)
    //         .with_resizable(true)
    //         .with_title("Synk Editor");

    //     #[allow(dead_code)]
    //     #[cfg(feature = "wayland")]
    //     {
    //         use winit::platform::wayland::WindowBuilderExtWayland as _;
    //         builder = builder.with_name(APP_ID, "");
    //     }

    //     #[allow(dead_code)]
    //     #[cfg(feature = "x11")]
    //     {
    //         use winit::platform::x11::WindowBuilderExtX11 as _;
    //         builder = builder.with_name(APP_ID, "");
    //     }
    //     builder
    // });

    
    let ui = Ui::new();
    ui.run();
}
