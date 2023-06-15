function sumTwoSmallestNums(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var sum = arr[0] + arr[1];
  return sum;
}
console.log(sumTwoSmallestNums([12, 5, 24, 55, 18])); // Output: 17
console.log(sumTwoSmallestNums([190, 300, 230, 800])); // Output: 420
