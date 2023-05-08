// Write a simple JavaScript program to join all elements of the following array into a string.

const mycolor = ["red", "green", "blue", "yellow"];

function joinArr(arr) {
  const output = arr.join(",");
  return output;
}

console.log(joinArr(mycolor));

// Write a JavaScript function to clone an array.

const main = [1, 2, 3, 4, 5];
const clone = [...main];

console.log(clone);
