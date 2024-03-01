use vello::Scene;

pub trait Element {
    fn render(&mut self, &mut Scene) 
}