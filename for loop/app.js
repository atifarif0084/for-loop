// Write a loop to print numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(i);;
    
}

// Write a loop to print even numbers from 1 to 20.

for (var i = 1; i <= 20; i++){
    if (i % 2 == 1) {
        console.log(i);
        
    }
}
// Write a loop to print odd numbers from 1 to 15.

for (var i = 1; i <= 15; i++){
    if (i % 2 == 0) {
        console.log(i);
        
    }
}

// Write a loop to calculate and print the factorial of a number (let's say 5).

var a = 1
for (var i = 1; i <= 5; i++){
    a = a * i;
}
console.log("Factorial of a "+ 5 + "is: " + a);

// Write a loop to print the multiplication table of a number (let's say 7) up to 10.

var b = 7
for (var i = 1; i <= 10; i++){
    console.log(b+" multiply "+i+" = "+b * i);
    
}

// Write a loop to print the reverse of a string (let's say "hello")
for (var i = 1; i <= 10; i++){
    console.log("hello "+i)
}

// Write a loop to print the square of numbers from 1 to 10.

for (var i = 1; i <= 10; i++){
    console.log(i+" square "+i*i);
}