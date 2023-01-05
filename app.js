// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

for (i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i)
  }
}

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ")
  } else {
    if (i % 3 == 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
      console.log(i, "BUZZ")
    }
  }
}

// Exercise 3 section

//For Exercise 1 while solution
let i = 1;

while (i < 100) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  
  console.log(i);
  i++;
}

//For Exercise 1 while/do solution
let i = 1;

do {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  
  console.log(i);
  i++;
} while (i < 100);

//for Exercise 2 while solution
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FIZZBUZZ");
  } else {
    if (i % 3 === 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 === 0) {
      console.log(i, "BUZZ");
    }
  }
  i++;
}

//for Exercise 2 while/do solution
let i = 1;

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FIZZBUZZ");
  } else {
    if (i % 3 === 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 === 0) {
      console.log(i, "BUZZ");
    }
  }
  i++;
} while (i <= 100);

// Exercise 4 section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let x = 0; x <= n; x++) {
  if (x == value) {
    console.log("Found Value!");
    break;
  } else if (x == n) {
    console.log("Did not find value")
  }
}

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");
  } else if ( i % fizzDivisor == 0) {
    console.log(i, "FIZZ");
  } else if ( i % buzzDivisor == 0) {
    console.log(i, "BUZZ");
  }
}