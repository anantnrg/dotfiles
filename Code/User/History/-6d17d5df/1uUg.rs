fn herons_formula(a: f64, b: f64, c: f64) -> f64 {
    let s = (a + b + c) / 2.0;
    (s * (s - a) * (s - b) * (s - c)).sqrt()
}

fn main() {
    let a = 5.0;
    let b = 7.0;
    let c = 8.0;
    let s = (a + b + c) / 2.0;

    println!("The area of the triangle is: {}", (s * (s - a) * (s - b) * (s - c)).sqrt());
}
