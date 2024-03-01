Hi, welcome to another video on the Rust programming language. In the first video, i said that the main objectives of Rust are to be fast and memory safe. To achieve these goals Rust uses a very unique system which is completely different from the ones found in other languages. In this video, we will learn about this unique system and how it makes Rust very fast and memory safe. But first we need to learn some basics.

# Memory allocation

When writing a program, we utilize memory to store and manipulate data. This memory is divided into two parts, the stack and the heap. They're both used store data but they differ fundementally in the way which they're used. First lets learn about the stack.

## Stack Memory

Stack memory can be used to store values of a fixed size, like integers, floats or booleans. The values in the stack are organized in the Last In First Out (LIFO) order. This means that the last value pushed onto the stack is the first one to be popped off. This allows for efficient and quick access to data. But most of the time, we use complex data structures such as strings, vectors, and other dynamically sized objects. Unlike types with fixed sizes, the sizes of these complex data structures are not predetermined and can change dynamically during program execution. Therefore, values of these types cannot be stored on the stack. This is where the heap memory comes into play.

## Heap Memory

The heap memory can be used to store values of any size. The values in the heap do not have a static size either. They can grow or shrink as needed through out program execution. But theres one problem. Unlike the stack, values in the heap are unorganized and dont follow any arrangement order like last in first out. This means that you cannot directly get any value from the heap like you could do with the stack. Instead, you need to create a pointer to this value in the stack. This pointer contains the memory address of the value, its length and some metadata. Then you can use this pointer to access the actual value in the heap. This is how we utilize the stack and heap memory to store data. But how can we efficiently allocate memory when need and deallocate it once we're done using it? This brings us to our next topic, memory management!

# Memory management

What's memory management? Memory management, refers to the allocation and deallocation of memory during program execution. It involves efficiently using and releasing memory resources to prevent issues such as memory leaks, where memory that is no longer needed is not properly released, and dangling pointers, which references memory that has already been deallocated. There are two primary approaches to memory management: manual management and garbage collection.

First, let's explore manual memory management. In languages like C, programmers need to manually allocate memory when needed and free it up once it's no longer needed. For example, in C, there are functions like malloc to allocate memory and free to release it. However, if you forget to free up memory, it can lead to a memory leak, where memory fills up over time. While manual management gives precise control, you need to be careful to avoid issues like memory leaks.

Next, lets talk about garbage collection. Languages such as Go or JavaScript automates the process of memory deallocation through a process called garbage collection. It identifies and reclaims memory that is no longer in use, which means that programmers dont need to explicitly free memory. However, this process involves periodically scanning memory for unreferenced objects, which can introduce computational overhead. Thus, garbage collection reduces the burden on the developer but it negatively affects the program efficiency and speed.

In the first video, i said that Rust is memory efficient, fast and also very developer friendly. So lets see how Rust achieves memory safety.

# Memory management in Rust

---

Rust innovatively manages memory without relying on manual management or garbage collection. Instead, Rust uses something called the ownership system to achieve this goal. This unique feature of Rust allows it to be extremely fast, without the downsides of manual memory management. It also allows Rust to be very developer friendly without the performance overhead of garbage collection. The ownership system in Rust consists of three main concepts

1. Ownership
2. Borrowing and
3. Lifetimes

In this video, we will take a look at the first two concepts, ownership and borrowing.

# Ownership

First we will learn about the three rules of ownership. These are:

1. Each value in Rust has **one** owner.
2. There can only be one owner at any time.
3. When the owner goes out of scope, the value is dropped.

But what do these mean? Lets look at the first one. The first rule states that every value has one owner.

Lets assume that we have a string value, for example "Hi". This string should have one owner, which is most likely a variable such as x. So what this will do is it will create a value in heap with the contents "Hi" and also a pointer in the stack named x that points to this value. According to rust, this pointer in the stack is the owner of the value in the heap. So now we've satisfied the first rule, since our value has an owner.

Lets look at the next rule. It states that there can only be one owner at a time.What does that mean? For example, lets create a variable named y and assign it the value of x. We can do that by putting let y = x. What this will do is it will transfer ownership of the string value from x to y. If we attempt to access x again, like if we try to print it, the compiler will give us an error, since this value is no longer owned by x. In Rust terms, we say that the string value has been "moved" from x to y. This is what the second rule says, there can only be one owner.

Lets now look at the third and final rule. It states that when the owner goes out of scope, the value is dropped. Lets see what this means. First of all, what do we mean by scope? By scope, we mean the section of code contained inside a pair of curly braces. In our case, the scope is the main function. When the main function ends, the y variable is dropped. As a consequence, the string value doesn't have an owner. This violates the first rule of ownership. So Rust drops this value from the heap memory as well.

Now, we will look at something interesting. Lets change the value of x to an integer, for example 10. Since integers are of a fixed size, it will be allocated on the stack. Next, like before, we will reassign the value of x to y. This is where things get interesting. If we now run our code, it will compile without any errors. Why does this happen? This is because, types stored on the stack like integers and booleans implement the `Copy` trait. This means that when we reassign the value of x to y, instead of moving the value, it is instead copied. So there are two integers in the stack now, x and y. This allows us to use both variables without any issues.

If we want to do the same thing with types that dont implement the `Copy` trait, like Strings or Vectors, we can do one of two things. We can either:

1. create a deep clone of this variable
2. create a shallow clone, ie create a reference

Lets look at the first option. To create a deep clone of the x variable and set it to y, we can call the `.clone()` method. What this will do is it will create a copy of the string in the heap and in the stack. So theres effectively two exactly same strings in memory. Since they're independent of each other, we can do whatever we want with either of these. But there are some drawbacks to doing this. Copying the whole string value means that we need to allocate additional memory. This can increase memory usage and also slow down the program, since it needs some time to find a suitable part of memory where this value can be stored.

Now, we dont always need a deep clone of a variable. We might just need a reference to its value. The process of creating a reference is called borrowing!

# Borrowing

Now lets see how we can create references. First we will create a function that takes in a String as an argument and does something with it, for example return the length. This will make it a bit easier to understand. Now if we call this function passing in the x variable, and then later try to use x again, it will give the same error as before. Lets see how we can fix it. Instead of passing a String, we can instead pass a reference to this String. We can do that by putting an ampersand before the String type in the function signature. Then we need to borrow x when we pass it to the function. This can be done by using the ampersand operator. Now if we run this code, it will compile without any errors. And we can do this as many times as we want!

Okay, next lets look at another example. Im going to create another function which still takes in a reference to a string. But instead of just returning the length, i want to actually modify the string value. For example, lets push an exclamation mark to this string using the `.push()` method. But this wont work. Thats because this is actually an immutable reference, meaning we cant mutate it. If we want to mutate it then we need to acquire a mutable reference to our string value. This can be done by putting mut after the ampersand like this. Then we need to make x mutable and also actually pass a mutable reference to x in the function call, like this. Now if we run our code, it will compile with no errors. Also when we later print out x later, it prints the mutated string value that contains the exclamation mark.

But we cant just go around creating mutable and immutable references because we have to abide by two rules whenever we create references. These two rules are:

1. At any given time, you can have either one mutable reference or any number of immutable references.
2. References must always be valid.

Lets see them in action. Lets create a variable named y and make it a mutable reference to x. Then we can print it out as usual. But if we create another variable named z and make it an immutable reference to x, then this code will not compile. This is what the first rule states. We can have either one mutable reference, like y or any number of immutable references like z, but not both at the same time.

Now lets look at the second rule. It states that references must always be valid. This means that we cannot have reference which points to a value that doesn't exist. A reference that points to a value that doesnt exists is called a dangling pointer. We can understand this better with an example. Consider this function, where we are returning an immutable reference to a string. Inside the function, we create a String and then return a reference to it. But this won't work, because this string value is dropped at the end of the scope of this function. This means that if we return a reference to this string, then this reference will be actually pointing to a value that doesn't exist. The rust compiler wont allow us have dangling pointers, so it will not compiler this code and give us an error stating this.

Thats all about the ownership system in Rust. Thanks for watching
