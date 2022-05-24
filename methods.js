const myArray = [97, 14, 22, 19, 65];

const isOdd = num => num % 2 !== 0;
// console.log(isOdd(19)); // true

// Original Array.prototype.some():
// console.log(myArray.some(isOdd)); // true

Array.prototype.mySome = function(cb) {
  for (let i = 0; i < this.length; i++) {
    let num = this[i];
    if (cb(num)) return true;
  }
  return false;
};

// console.log(myArray.mySome(isOdd)); // true


// Original Array.prototype.reduce():
// const initVal = 0;
// console.log(myArray.reduce((prev, curr) => prev + curr, initVal)); // 217

Array.prototype.myReduce = function(initVal, cb) {
  for (let i = 0; i < this.length; i++) {
    let num = this[i];
    initVal = cb(initVal, num)
  }
  return initVal;
}

// console.log(myArray.myReduce(0, (accum, num) => {
//   return accum + num;
// })); // 217

// const smolArr = [1, 2, 3];
// console.log(smolArr.myReduce(5, (accum, num) => {
//   return accum * num;
// })); // 30
