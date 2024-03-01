fn mod_string(s: &mut String) {
    s.push('!');
}

fn main() {
    let mut x = String::from("Hi");
    mod_string(&mut x);
    println!("{}", x);
}
