fn process_string(string: &mut String) -> usize {
    string.push('s')
}

fn main() {
    let mut x = String::from("Hi");
    process_string(&mut x);
    println!("{}", x);
}
