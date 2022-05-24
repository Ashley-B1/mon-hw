const myArray = [97, 14, 22, 19, 65];

const isOdd = num => num % 2 !== 0;

// Original Array.prototype.some():
console.log(myArray.some(isOdd));

// console.log(isOdd(19)); // true

Array.prototype.mySome = function(cb) {
  for (let i = 0; i < this.length; i++) {
    let num = this[i];
    if (cb(num)) return true;
  }
  return false;
};

// console.log(myArray.mySome(isOdd)); // true
