//array -- tasks
// تكليف 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[+true + +true][0]);  // ZERO


//نكليف 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// 1
if (haystack.includes(needle)) {
    console.log("Found");
}
// 2
if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}
//3
if (haystack.some(e => e === needle)) {
    console.log("Found");
}


//تكليف 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs); // fxy

allArrs.push(arr2[arr1.length - true]);
allArrs.push(arr1[arr1.length - true]);
allArrs.push(arr2[arr2.length - true]);

console.log(allArrs);

// Date -- tasks
// 1 تكليف 

// Needed Output -- with my birthday 

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"



let dateNow = new Date();
let birthday = new Date("2005-02-24")
let diff = dateNow - birthday

let seconds = (diff / 1000);
let minutes = (diff / (1000 * 60));
let hours   = (diff / (1000 * 60 * 60));
let days    = (diff / (1000 * 60 * 60 * 24));
let months  = (days / 30);
let years   = (days / 365);


console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);
