// Question: 
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24

// Answer:
function miniMaxSum(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let minList = sortedArr.slice(0, sortedArr.length - 1);
    let maxList = sortedArr.slice(1);
    const minSum = minList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
    const maxSum = maxList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,

);
  console.log(minSum,maxSum)
}
