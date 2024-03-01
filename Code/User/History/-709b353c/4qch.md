Hi, welcome to my fourth video on the Rust programming language. In the last video we took a look at functions. In this video, we'll take a look at control flow statements in Rust. Control flow statements can be used to control the flow of our program, for example, pausing execution until a certain condition is met.

In this video we'll first take a look at if statements, infinite loops, while loops and for loops. First we will take a look at if statements. 

If statements in programming allow conditional execution by evaluating a boolean condition. For instance, suppose we have a number and want to check if it's a multiple of 64. Lets use an if statement. If this number is a multiple of 64, we want to say "Its a multiple". Otherwise, we want to print out "Its not a multiple". Thats how a basic if statement works. Now lets see how we can implement it in rust.

Let's start by setting up our variable. I'll name it 'x' and initialize it to 2048. Next lets use the if keyword. Then we need to provide the condition we want to match against. In our case, we want to check if x is a multiple of 64. We know that if a number is a multiple of another number, then the first number divided by the second number should return a remainder of zero. We will use this concept here. So type in x, then the modulus sign and finally 64. Now if you remember, in our previous video, when we divided two variables, we used the slash sign. But here we are using the modulus sign. The difference between these two signs is that if we use the slash sign, then the calculation will return the quotient and if we use the modulus sign, it will return the remainder. Since we want to check if the remainder of x divided by 64 is zero, we will use the modulus sign.

Next to actually check if the remainder is zero, we need to put two equal signs and then type in 0. This will compare the result of our calculation and if it is zero, it will return true. Then we need to put the code we want to execute inside a pair of curly braces. Inside these braces, i'll use the println macro to print a string which says this is a multiple of 64. Now lets try running our code. It will print out "its a mutliple" since 2048 is a multiple of 64. Next we go back to our code and change the value of x to some other number, say 3500. If we run our code again, nothing will be printed. This happens because 3500 is not a multiple of 64. But this isn't that intuitive. We can fix this by printing out "its not a multiple" if the value is not a multiple of 64. To do that we can use the else statement. After the closing brace of the if statement, type in else and open a new pair of curly braces. Inside we can define what code we want to execute if the condition is not met. I will print out "its not a multiple of 64" using the println macro. Now lets run our code again. It will print out "its not a multiple of 64". 

Great now we can check if a variable is a multiple of 64 and do different actions based on the returned output. Lets do one more thing. We know that 3500 is not a multiple of 64, we also know that 3500 is a multiple of 70. So lets also check if the given number is a multiple of 70. We can easily do that using else if. Before the else block, type in else space if and then pass in the condition, which is x modulus 70 == 0. Finally, open a new pair of curly braces. Your code should look something like this. Inside the if else block, we can define what we want to do if x is a multiple of 70. Again, I'll just print out "its a multiple of 70 but not 64". Also i'll just change the string we are printing in the else block to include the fact that this number is a multiple of neither 64 nor 70. Now if we run our once more, it will say that x is a multiple of 70 but not 64. That sums up if statements in Rust.

Okay, next lets learn about infinite loops. Infinite loops, as the name suggest executes a piece of code over and over again until is stopped manually. Lets see how we can create a infinite loop in rust. To create an infinite loop we have to use the loop keyword. Then put a pair of curly braces. Just like with if statments, we need to put the code we want to execute inside the curly braces. For example, lets print out some text using println!. Now lets try running our code. It will print our string infinitely. If want to quit this, we have to kill our program using Ctrl + C. But there's another way to safely break out from this loop. Lets go back to our loop. Now after the println! statement, type in break. This is a special keyword that breaks the current loop. Now if we run the code, then it will print our string once and then exit. Infinite loops are useful for things like capturing user input, where you need to continously check if the user has provided any input. Thats all about infinite loops.

Now we will take a look at while loops. A while loop continuously executes a specific block of code while a given condition remains true. For example, lets say we have a variable and its value is true. This loop checks whether the value is true and, if so, performs the associated actions. As long as the value stays true, the loop keeps executing the code block. If, at any point, the value becomes false, the loop is terminated.

Okay, now we know what while loops are. Next, lets see how we can create a while loop in Rust. For this example, I will create a while loop that checks if the value of an integer is less than 10, and if it is then it will print the value of the variable and increment the value by 1. Otherwise it will break the loop. So first we need to create a mutable variable, which i will call x. I will then set it to 0. Next lets define the while loop. To do that, we can use the while keyword. Then we need to provide a condition, which in our case is to check if x is greater than or equal to 10. So type x, then put a left angle bracket, next an equal sign and finally type in 10. Now we need to tell the compiler what code we want to run if this value is true. Similar to the infinite loop which we talked about earlier, the code we want to execute must be put inside a pair of curly braces. So put a pair of curly braces. The first thing we want to do is to print the current value of the variable. We can use the println macro and then format the string to print our variable. Then we need to mutate x and increment its value by 1. To do that, we can type x += 1. Incrementing x is crucial; otherwise, x stays at zero, causing the while loop to run indefinitely.

Now lets try running this code. It will print every number from 0 to 10 and then exit, like this. We have successfully created a while loop that prints every number between 0 and 10.

Next lets move on to the for loop. First lets see what for loops are. A for loop, iterates over items in a collection, or a range or any iterable sequence. Lets look at an example. Suppose we have an array of fruits, like this. Then lets create a for loop. What this for loop will do is it will iterate over each fruit in this array and perform some function, for example print out the name of the current. In this case, the for loop will first print out mango, then it will print out banana, then strawberry, next kiwi and finally peach. Thats basically the gist of for loops. Now lets see how we can implement this in Rust. First lets create the array of fruits, which in Rust is actually a vector containing a bunch of strings. To create this array, first we will declare a variable named fruits. Then we will use a macro called vec, to actually create the vector containing the names of our fruits. This is similar to the println macro. So type vec!, then put a pair of square brackets and inside we can type in the names of our fruits. Each of the names are separated by commas.

Great! Now we have created a vector containing a list of our fruits. Next lets use the for loop and iterate through each fruit in this array. We can create a for loop using the for keyword. Then we need to create a loop variable or iteration variable. This variable represents each individual element as the loop iterates through the array. I will call this variable fruit, since it represents each fruit in our fruits array. So type in fruit. Then we need to use the "in" keyword and also pass in the vector we want to iterate over, which in our case is fruits. Now just like in all the previous loops, we need to put the code we want  to execute inside a pair of curly braces. Inside the curly braces, I'll just print out the current fruit for now using the println macro. Thats all we need to docreate a for loop that iterates through this array of fruits and print out each fruit. Now if we run our code, it will print out each fruit in our array. 

So thats all about control flow statments in Rust. In the next video, we will understand the concept of borrowing and also learn about the borrow checker in Rust. Thanks for watching!