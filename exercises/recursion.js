// Write a JavaScript program to calculate the factorial of a number.

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(5));

// #2  Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.

const gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
console.log(gcd(2154, 458));

// #3 Write a JavaScript program to get integers in the range (x, y) using recursion.

var range = function (start_num, end_num) {
  if (end_num - start_num === 2) {
    return [start_num + 1];
  } else {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2, 9));
