use freya::prelude::*;

struct Props {
    #[props(extends = GlobalAttributes)]
    attributes: Vec<Attribute>,
}

#[allow(non_snake_case)]
pub fn Sidebar() {}
