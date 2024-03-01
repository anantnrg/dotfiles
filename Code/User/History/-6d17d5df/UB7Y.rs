fn main() {
    let a = 5.0;
    let b = 7.0;
    let c = 8.0;
    let s = (a + b + c) / 2.0;


    println!("{}", (s * (s - a) * (s - b) * (s - c)).sqrt());
}
