function makeNegative(num) {
    if (num > 0) {
      num = -num
    }
  return num;
}
console.log(makeNegative(42), '-->', -42);
console.log(makeNegative(0), '-->', 0);

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }