// function exercise
// #1  Write a JavaScript function that returns a string that has letters in alphabetical order

function alpha_order(name) {
  const letterOnly = name.replace(/[^a-zA-Z]/g, "");
  const output = letterOnly.split("").sort().join("");
  return output;
}

const Name = "fedcba";
const result = alpha_order(Name);
console.log(result);
// methods used :
// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// Code : console.log('32243'.split(""));
// Output : ["3", "2", "2", "4", "3"]

// The sort() method is used to sort the elements of an array in place and returns the array.
// Code : console.log(["3", "2", "2", "4", "3"].sort());
// Output : ["2", "2", "3", "3", "4"]

// The join() method is used to join all elements of an array into a string.
// Code : console.log(["2", "2", "3", "3", "4"].join(""));
// Output : "22334"

// #2 Write a JavaScript function that checks whether a passed string is a palindrome or not?

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the string and compare with the original
  return str === str.split("").reverse().join("");
}

const Name2 = isPalindrome("bob");
console.log(Name2);
