use std::collections::HashMap;

use serde::Deserialize;

#[derive(Deserialize, Debug, PartialEq, Eq)]
struct AnnotatedNumber {
    #[serde(rename = "$kaydle::annotation")]
    annotation: Option<String>,
    value: i32,
}

#[derive(Deserialize, Debug, PartialEq, Eq)]
enum IntOrString {
    #[serde(rename = "int")]
    Int(i32),

    #[serde(rename = "string")]
    String(String),
}

#[derive(Deserialize, Debug, PartialEq, Eq)]
struct IntString {
    int: i32,
    string: String,
}

#[derive(Deserialize, Debug, PartialEq, Eq)]
struct Document {
    name: String,
    number: i32,
    strings: Vec<String>,
    annotated: Vec<AnnotatedNumber>,
    annotated_enums: Vec<IntOrString>,
    key_value: HashMap<char, i32>,
    enum_list: Vec<IntOrString>,
    properties: IntString,
    children: IntString,
}

fn main() {
    let document: Document = kaydle::serde::from_str(
        r#"
    name "Kat"
    number 10
    strings "A" "B" "C"

    // Values can include an annotation. Normally the annotation is ignored,
    // but you can use a struct containing a field called $kaydle::annotation
    // to include it in deserialization
    annotated 1 (abc)2 (def)3

    // Annotations can also be used as enum discriminants
    annotated_enums (int)10 (string)"hello"

    // If a mapping type is deserialized (like a struct or HashMap), node names
    // are used as keys
    key_value {
        a 1
        b 2
        c 3
    }

    // If a list of enums is deserialized, node names are used as enum
    // variants
    enum_list {
        int 10
        string "hello"
    }

    // kaydle treats properties and children similarly when deserializing maps.
    // in the future it will be possible to specify which one you wanted, or
    // use both.
    properties int=10 string="world"
    children {
        int 10
        string "world"
    }
"#,
    )
    .expect("failed to deserialize");

    assert_eq!(
        document,
        Document {
            name: "Kat".to_owned(),
            number: 10,
            strings: Vec::from(["A".to_owned(), "B".to_owned(), "C".to_owned(),]),
            annotated: Vec::from([
                AnnotatedNumber {
                    annotation: None,
                    value: 1,
                },
                AnnotatedNumber {
                    annotation: Some("abc".to_owned()),
                    value: 2,
                },
                AnnotatedNumber {
                    annotation: Some("def".to_owned()),
                    value: 3,
                },
            ]),
            annotated_enums: Vec::from([
                IntOrString::Int(10),
                IntOrString::String("hello".to_owned()),
            ]),
            key_value: HashMap::from([('a', 1), ('b', 2), ('c', 3),]),
            enum_list: Vec::from([
                IntOrString::Int(10),
                IntOrString::String("hello".to_owned()),
            ]),
            properties: IntString {
                int: 10,
                string: "world".to_owned(),
            },
            children: IntString {
                int: 10,
                string: "world".to_owned(),
            },
        },
    );
}
