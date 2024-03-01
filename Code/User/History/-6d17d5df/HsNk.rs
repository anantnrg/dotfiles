fn main() {
    let a: f64 = 128.0;
    let b: f64 = 86.0;
    let c: f64 = 240.0;
    let s = (a + b + c) / 2;

    println!("{}", (s * (s - a) * (s - b) * (s - c)).sqrt());
}
