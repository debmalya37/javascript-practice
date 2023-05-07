// Write a simple JavaScript program to join all elements of the following array into a string.

const mycolor = ["red", "green", "blue", "yellow"];

function joinArr(arr) {
  const output = arr.join(",");
  return output;
}

console.log(joinArr(mycolor));
