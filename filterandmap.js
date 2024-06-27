// filterdown the array
// length is changed

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = test.filter((x) => x % 2 === 0)
console.log(result)

const result2 = test.map((x) => x * 2)
console.log(result2)