fn main() {
    let mut x = 0;
    let fruits = vec!["mango", "banana", "strawberry"];

    for fruit in fruits {
        println!("{}", fruit);
    }
    while x <= 10 {
        println!("{}", x);
        x += 1;
    }
}
