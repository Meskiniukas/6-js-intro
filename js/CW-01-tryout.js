function positiveSum(arr) {
    let ps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            ps += arr[i]
        }
    }
      console.log(ps);
      return ps
}

console.log(positiveSum([1, 2, 4, 4, 5, -6]));
console.log('Labas rytas');