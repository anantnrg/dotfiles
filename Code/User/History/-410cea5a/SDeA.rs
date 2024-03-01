fn mod_string(s: &mut String) {
    s.push('!');
}

fn get_len(s: &String) -> usize {
    s.len()
}

fn main() {
    let mut x = String::from("Hi");
    let y = &mut x;
    let z = &x;
    println!("{}", y);
}
