//Comparison & Logical Operators 
//تكليف1
console.log(100 == "100");      // true
console.log(100 < 1000);        // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 != "-10");      // true
console.log(-50 < 0 && "-40" > -100); // true
console.log(10 > 0 && -"-40" < 50); // true
console.log("10" == 10);        // true
console.log(Boolean(20) && !false);       // true



//تكليف2
let num1 = 10;
let num2 = 20;

// Solution 1: Greater than
console.log(num2 > num1); // true

// Solution 2: Less than
console.log(num1 < num2); // true

// Solution 3: Not equal
console.log(num1 != num2); // true

// Solution 4: Strict not equal
console.log(num1 !== num2); // true

// Solution 5: Logical OR (both truthy)
console.log(!!num1); // true

// Solution 6: Logical AND (both truthy)
console.log(num1 < num2 && num2 > num1); // true

//************************************************ ***//