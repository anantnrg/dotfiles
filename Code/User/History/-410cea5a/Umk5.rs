fn main() {
    let mut x = vec![0, 1, 2];
    let y = &mut x;
    y.push(3);
    println!("{:?}", x);
}
