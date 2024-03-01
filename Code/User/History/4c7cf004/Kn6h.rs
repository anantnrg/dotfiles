use vello::kurbo::{Point, Size};

use crate::{color::Color, element::Element};

pub struct Div {
    children: Vec<Box<dyn Element>>,
    size: Size,
    position: Point,
    background: Color
}