// example of forEach function

// const values = [1, 2, 3, 4, 5];

// values.forEach((number, index, arr) => {
//   arr[index] = number + 2;
// });

// console.log(values);
// In this modified code, we're accessing the arr array
// (which is the same as values) and updating each element by adding 2 to it.
// We're using the index parameter to access the current element's index in the array,
//and then assigning the new value back to that same index using the arr[index] = syntax.
// After running this modified code, you should see the updated values array printed to the console,
// which should contain the values [3, 4, 5, 6, 7].

// slice method

const book = ["atomic habits", "after", "linchpin", "zero to one"];

const Book = book.map((value, index) => {
  return value[0].toUpperCase() + value.slice(0, 1);
});
console.table(Book);
