use vello::kurbo::{Point, RoundedRect, Size, Stroke};

use crate::{color::Color, element::Element};

pub struct Div {
    pub children: Vec<Box<dyn Element>>,
    pub size: Size,
    pub position: Point,
    pub background: Color,
    pub border_width: f64,
    pub border_color: Color,
    pub radius: f64,
}

impl Element for Div {
    fn render(&mut self, scene: &mut vello::Scene) {
        let shape = RoundedRect::new(
            self.position.x,
            self.position.y,
            self.size.width,
            self.size.height,
            20.0,
        );
        let stroke = Stroke::new(2.0);
        let stroke_color = Color::Hex("");
        scene.stroke(&stroke, Affine::IDENTITY, stroke_color, None, &shape);
    }
}
