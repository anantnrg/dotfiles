fn main() {
    let mut x = vec![0, 1, 2];
    let y = &x;
    x.push(3);
    println!("{:?}", y);
}
