fn herons_formula(a: f64, b: f64, c: f64) -> f64 {
    let s = (a + b + c) / 2.0;
    (s * (s - a) * (s - b) * (s - c)).sqrt()
}

fn main() {
    let side_a = 5.0;
    let side_b = 7.0;
    let side_c = 8.0;

    let area = herons_formula(side_a, side_b, side_c);
    println!("The area of the triangle is: {}", area);
}
