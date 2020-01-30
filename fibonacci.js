// =====================================================================================================
// Prompt --> Write a function that takes in an integer (called N) and returns the Nth fibonnaci 
//            number.

// Notes -->  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 => fibonacci sequence example
//            Remember that fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
//            The fibonacci sequence is often defined with it's first two numbers.
//            such that -- fibonacciSequence[0] = 0, and FS[1] = 1
//            so when we create a function to get the Nth fibonacci number we get:
//            getNthFib(1) = FS[0] i.e. 0, and getNthFib(2) = FS[1] i.e. 1 because
//            we are literally asking the function to return the FIRST fibonacci number value
//            and then the second fibonacci value. You can't return the 0th fibonacci number. 
//            it starts at 1. 

// Remember-> Big O notation is a mathematical / computer science symbol to represent 
//            how fast your function grows or declines.
//            Time  = O(n)   -> means your function takes as long as running n times
//            Time  = O(n^2) -> means your function takes n * n amount of running time etc...
//            Space = O(n)   -> means your function takes n amount of space in memory somewhere
//            Space = O(n^2) -> means your function takes n * n amount of memory in computer etc...

// =====================================================================================================

// Recursive Example (a function that calls itself to run the mathematical formula N number times)
// Time = O(2^n) | Space = O(n)
// Needs to run recursively N number of times and N number of spaces on function call stack to execute
// this solution (as you can see, this isn't the most effective and has runtime implications)

function getNthFib1(n) {
  // base cases of n equaling 2 or 1, if n = 0 maximum call stack size will be exceeded and error will   // be thrown
	if (n == 2) {
		return 1;
	} else if (n == 1) {
		return 0;
  // else we will find the fibonnaci number by recursively calling getNthFib twice and adding their // // resolved states, passing in n-1 and n-2 as args respectively. As you can see here, 
	} else {
		return getNthFib1(n-1) + getNthFib1(n-2);
	}
}
// Tests
// 
console.log("Recursive Test Output");
console.log(getNthFib1(1));
console.log(getNthFib1(2));
console.log(getNthFib1(3));
console.log(getNthFib1(4));
console.log(getNthFib1(5));
console.log(getNthFib1(6));
console.log(getNthFib1(7));
console.log(getNthFib1(8));
console.log(getNthFib1(9));
console.log(getNthFib1(10));

// Caching Example (uses recursivity)
// O(n) time | O(n) space
// Runs fibonacci function N number of times and saves in hash table to avoid re running * N times 
// this solution saves time but still stakes up N amount of space in memory via hash table / call stack

function getNthFib2(n, memoize = {1: 0, 2: 1}) {
  // memoize is a hashtable initialized as an object where 1 points to 0, and 2 points to 1, the first
  // two numbers in the fibonacci sequence. We can check if N is already inside memoize, if so, we can
  // return memoize at that position and return the value/answer (fibonacci number)
  if (n in memoize) {
    return memoize[n];
  // if n is not in memoize, we can save fibonacci formula value/resolvement to memoize hashtable
  // thereby reducing time complexity by having the ability to look it up immediately later. Make sure
  // to pass memoize to recursive calls when running function again or else you won't be able to use 
  // hashtable look up speeds when recursively calling getNthFib2. That recursive call back is key to
  // this solution
  } else {
    memoize[n] = getNthFib2(n-1, memoize) + getNthFib2(n-2, memoize);
    return memoize[n];
  }
}
// Tests
// 
console.log("caching / memoization Test Output");
console.log(getNthFib2(1));
console.log(getNthFib2(2));
console.log(getNthFib2(3));
console.log(getNthFib2(4));
console.log(getNthFib2(5));
console.log(getNthFib2(6));
console.log(getNthFib2(7));
console.log(getNthFib2(8));
console.log(getNthFib2(9));
console.log(getNthFib2(10));

// Iterative Example (a function saves space by storing only last two fibonacci numbers at given time)
// O(n) time | O(1) space
// Runs fibonacci function N number of times still but 
// this solution saves space by only saving / storying last two fibonacci numbers at any given time

function getNthFib3(n) {
  // create array of first two numbers in fib sequence. set counter to 3 to check each of those array
  // values. While counter is less then n, create the next fib value to add by adding two previous nums,
  // add the new fib value to array and update array. increment counter 
  let lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter += 1;
  }
  if (n > 1) {
    return lastTwo[1];
  } else {
    return lastTwo[0];
  }
}
// Tests
// 
console.log("iterative algorithim Test Output (only need to know past 2 fib numbers)");
console.log(getNthFib3(1));
console.log(getNthFib3(2));
console.log(getNthFib3(3));
console.log(getNthFib3(4));
console.log(getNthFib3(5));
console.log(getNthFib3(6));
console.log(getNthFib3(7));
console.log(getNthFib3(8));
console.log(getNthFib3(9));
console.log(getNthFib3(10));
