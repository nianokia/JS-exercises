// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
 let count1 = 1;
 while (count <= 5) {
  console.log(count1);
  count1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let count2 = 1;
do {
  console.log(count2);
  count2++;
} while (count2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let count3 = 1; count3 <= 5; count3++) {
  console.log(count3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// ********* WHILE LOOP ***********
let count4 = 10;
while (count4 >= 1) {
  console.log(count4);
  count4--;
}

// ******** DO WHILE LOOP *********
let count5 = 10;
do {
  console.log(count5);
  count5--;
} while (count5 >= 1);

// ******** FOR LOOP **********
for (let count6 = 10; count6 >= 1; count6--) {
  console.log(count6);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// ********* WHILE LOOP ***********
let count7 = 7;
while (count7 <= 27) {
  console.log(count7);
  count7++;
}

// ******** DO WHILE LOOP *********
let count8 = 7;
do {
  console.log(count8);
  count8++;
} while (count8 <= 27);

// ******** FOR LOOP **********
for (let count9 = 7; count9 <= 27; count9++) {
  console.log(count9);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// ********* WHILE LOOP ***********
let count10 = 0;
while (count10 <= 100) {
  console.log(count10);
  count10 += 10;
}

// ******** DO WHILE LOOP *********
let count11 = 0;
do {
  console.log(count11);
  count11 += 10;
} while (count11 <= 100);

// ******** FOR LOOP **********
for (let count12 = 0; count12 <= 100; count12+=10) {
  console.log(count12);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// Its an infinite loop because the condition is true when counterFour is less than
// 2 and we are decremeting the counter, thereby never breaking the condition.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favInt = 3;
for (let count13 = 0; count13 <= favInt; count13++) {
  console.log(count13);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favInt2 = 7;
for (let count14 = 0; count14 <= 100; count14++) {
  if (count14 == favInt2) {
    console.log(`${favInt2} my favorite number!`);
  } else {
    console.log(`${count14} not my favorite number`)
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// I would use a while loop if I wanted to execute an action only until the condition is false. This
//    would be useful when I want the code to stop at a certain point.
// I would use a do while loop if I must at least execute once. For instance, if I absolutely need
//    a value to be input for the code to run, then I might use a do while loop.
// Then I would use a for loop when I want to ensure that I iterate through each instance.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log(`inside ${insideCounter}`);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I forgot how to do a do while loop so I needed a jogger on the syntax, but other than that
// I was able to flow well through these exercises.

// Email your file to us or commit your file to GitHub and email us a link.
