// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let name = 'Jason Cruz';

function greetMe() {
  console.log(`Hello, ${name}!`)
}

name = 'Polymath';
greetMe();

const WhoAmI = () => {
  let name = 'Jason Cruz';
  return function() {
    return name;
  }
};

const polyMath = WhoAmI();
console.log(polyMath());

// function greeting() {
//   let whoAmI = 'Jason Cruz';

//     function innerFunction() {
//     return {greeting}
//   }
// };


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
// IMPLEMENTATION OF counterMaker:
// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
// 2- Declare a function `counter`. It should increment and return `count`.
//      NOTE: This `counter` function, being nested inside `counterMaker`,
//      "closes over" the `count` variable. It can "see" it in the parent scope!
// 3- Return the `counter` function.

const counterMaker = () => {
  let count = 0;
  return function () {
     ++count;
     return count;
  }
};
// Example usage: 
const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 5
console.log(myCounter()); // 6
console.log(myCounter()); // 7
console.log(myCounter()); // 8


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMakerSophisticated = () => {
  let count = 0;
  let limit = 10;

    while(count <= limit) {
      console.log(count);
      count++;
    }
    let newCount = count;
    return newCount;
};

// const counterMaker = () => {
//   let count = 0;
//   let limit = 10;

//     while(count <= limit) {
//       console.log(count);
//       count++;
//     }
//     let newCount = count;
//     return newCount;
// };


// const counterMaker = () => {
//   let count = 0;
//   let limit = 10;

//   while(count <= limit) {
//     console.log(count);
//     count++;
//   };

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const cMaker = () => {
  let lessNum = 10; 
  let num = 0;
  decrement: lessNum = lessNum - 1;
  
  // CLOSURE
  return counterFactory = function() { 
    increment: num = num + 1;
    return num;
    }
};

let newNum = cMaker();
console.log(newNum());
