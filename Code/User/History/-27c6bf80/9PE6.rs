use freya::prelude::*;

#[derive(Props)]
struct Props {
    #[props(extends = GlobalAttributes)]
    attributes: Vec<Attribute>,
}

#[allow(non_snake_case)]
pub fn Sidebar() {}
