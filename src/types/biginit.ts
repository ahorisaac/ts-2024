let a = 999999999999999;
let b = 99999999999999999;

console.log("a = ", a);
console.log("b = ", b);

// in JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 format)

let x = Number.MAX_SAFE_INTEGER;
let y = Number.MIN_SAFE_INTEGER;

console.log("x = ", x);
console.log("y = ", y);

let xPlusOne = x + 1;
let xPlusTwo = x + 2;
console.log("x + 1 = ", xPlusOne);
console.log("x + 2 = ", xPlusTwo);

console.log("x + 1 === x + 2 ", xPlusOne === xPlusTwo);

// we can do with BigInt

let bigIntOne = BigInt(1);
let bigIntTwo = 1236985n;

console.log("bigIntOne = ", bigIntOne);
console.log("bigIntTwo = ", bigIntTwo);

let myBigIntOne: bigint = BigInt(15465456);
let myBigIntTwo: bigint = 326597978n;
let myBigIntThree: bigint = myBigIntOne + myBigIntTwo;

console.log("myBigIntOne = ", myBigIntOne);
console.log("myBigIntTwo = ", myBigIntTwo);

console.log(myBigIntThree);

// what we cannot do with BigInt

// let myDecimal: bigint = 123.825829;

// let myMath: bigint = Math.pow(2, 8);
