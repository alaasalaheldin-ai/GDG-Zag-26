//Strings And Methods
//تكليف1
let userName = "Elzero";

// Solution One
console.log(userName[0].toLowerCase());

// Solution Two
console.log(userName.charAt(0).toLowerCase());

// Solution Three
console.log(userName.slice(0, 1).toLowerCase());

// Solution Four
console.log(userName.substring(0, 1).toLowerCase());

// Solution Five
console.log(userName.substr(0, 1).toLowerCase());

// Solution Six (repeat 3 times)
console.log(userName[0].toLowerCase().repeat(3));

//تكليف2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True
console.log(word[0].toLowerCase() === letterE.toLowerCase()); // True
console.log(word[word.length - 1].toLowerCase() === letterO.toLowerCase()); // True


//************************************************ ***//