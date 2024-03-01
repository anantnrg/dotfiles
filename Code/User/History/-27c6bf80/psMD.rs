use freya::prelude::*;

#[derive(Props, Clone, PartialEq)]
struct Props {
    #[props(extends = GlobalAttributes)]
    attributes: Vec<Attribute>,
}

#[allow(non_snake_case)]
#[component]
pub fn Sidebar() {}
