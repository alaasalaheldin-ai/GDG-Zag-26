//numbers 
//تكليف1
// Your Solutions
console.log(1e5);                 // 100000 (Scientific Notation)
console.log(10 ** 5);             // 100000 (Exponentiation Operator)
console.log(100000.0);            // 100000 (Float)
console.log(+"100000");           // 100000 (Unary Plus)
console.log(Number("100000"));    // 100000 (Number Constructor)
console.log(parseInt("100000"));  // 100000 (parseInt)
console.log(Math.pow(10, 5));      // 100000 (Math Method)
console.log(1e6 / 10);             // 100000 (Arithmetic once)
console.log(50000 << 1);           // 100000 (Bitwise Shift)
console.log((100000).valueOf());  // 100000 (valueOf)


//تكليف2
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991

//تكليف3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
//تكليف4
let myVar = "100.56789 Views";
console.log(parseInt(myVar));           // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.
//تكليف5
let number = 10;

console.log(Number.isInteger(number) + Number.isInteger(number)); // 2


//************************************************ ***//