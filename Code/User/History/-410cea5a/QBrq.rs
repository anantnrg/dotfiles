fn main() {
    let mut x = vec![0, 1, 2];
    let y = &mut x;
    let z = &x;
    println!("{:?}", y);
}
