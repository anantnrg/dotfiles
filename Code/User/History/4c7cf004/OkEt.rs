use vello::kurbo::{Point, Size};

use crate::element::Element;

pub struct Div {
    children: Vec<Box<dyn Element>>,
    size: Size,
    position: Point
}