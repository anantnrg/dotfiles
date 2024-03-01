fn get_length(string: &String) -> usize {
    string.len()
}

fn main() {
    let x = String::from("Hi");
    get_length(&x);
    println!("{}", x);
}
