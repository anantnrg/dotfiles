use vello::kurbo::{Affine, Point, RoundedRect, Size, Stroke};

use crate::{color::Color, element::Element, styles::BorderOffset};

pub struct Div {
    pub children: Vec<Box<dyn Element>>,
    pub size: Size,
    pub position: Point,
    pub background: Color,
    pub border_width: f64,
    pub border_color: Color,
    pub border_offset: BorderOffset,
    pub radius: f64,
}

impl Element for Div {
    fn render(&mut self, scene: &mut vello::Scene) {
        let shape = RoundedRect::new(
            self.position.x,
            self.position.y,
            self.size.width,
            self.size.height,
            self.radius,
        );
        let border_stroke = match self.border_offset {
            BorderOffset::Outset => RoundedRect::new(
                self.position.x + self.border_width,
                self.position.y + self.border_width,
                self.size.width + self.border_width,
                self.size.height + self.border_width,
                self.radius,
            ),
            BorderOffset::Inset => RoundedRect::new(
                self.position.x - self.border_width,
                self.position.y - self.border_width,
                self.size.width - self.border_width,
                self.size.height - self.border_width,
                self.radius,
            ),
            BorderOffset::Center => RoundedRect::new(
                self.position.x + (self.border_width / 2.0),
                self.position.y + (self.border_width / 2.0),
                self.size.width + (self.border_width / 2.0),
                self.size.height + (self.border_width / 2.0),
                self.radius,
            ),
        };
        let stroke = Stroke::new(self.border_width);
        let stroke_color = Color::Hex("");
        scene.stroke(&stroke, Affine::IDENTITY, stroke_color, None, &shape);
    }
}