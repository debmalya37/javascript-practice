const unsorted = [1, -1, 2, 3, -4, 0, -8];

// sorting in ascending order
const sorting1 = unsorted.sort((a, b) => a - b);

console.log(sorting1);

// sort the array in descending order

const sorting2 = unsorted.sort((x, y) => y - x);
console.log(sorting2);
