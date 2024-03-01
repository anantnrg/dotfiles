fn main() {
    let a = 128;
    let b = 86;
    let c = 240;
    let s = (a + b + c)/2;

    println!("{}", (s * (s - a) * (s - b) * (s - c)).sqrt());
}
