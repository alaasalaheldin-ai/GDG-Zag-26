 // تكليف 1

// <div id="elzero" class="element" name="js">JavaScript</div>

let myIdElement = document.getElementById("elzero");
let myClassElement = document.getElementsByClassName("element");
let myElementTag = document.getElementsByTagName("div");
let myElementName = document.getElementsByName("js");
let myQuery = document.querySelector("div");
let myQuery2 = document.querySelector(".element");
let myQueryAll = document.querySelectorAll(".element");
let q3 = document.querySelector("#elzero");




console.log(myIdElement); // 1
console.log(myClassElement); // 2
console.log(myElementTag); // 3
console.log(myElementName); // 4
console.log(myQuery); // 5
console.log(myQuery2); // 6
console.log(myQueryAll); // 7
console.log(document.body); // 8
console.log(q3); // 9


// تكليف 2

for (let i=0 ; i<=9 ; i++ ) {
    document.images[i].src =  "https://elzero.org/wp-content/themes/elzero/imgs/logo.png" ;
    document.images[i].alt =  "Elzero Logo" ;
};

// تكليف 3
let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.oninput = function () {
  let dollar = input.value;
  let pound = (dollar * 15.6).toFixed(2);

  result.innerHTML = `${dollar} USD Dollar = ${pound} Egyptian Pound`;
};

// تكليف 4

let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");


let tempTitle = divOne.title;
divOne.title = divTwo.title;
divTwo.title = tempTitle;

let tempText = divOne.textContent;
divOne.textContent = divTwo.textContent;
divTwo.textContent = tempText;


divTwo.textContent += divOne.attributes.length;


// تكليف 5

let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {

  if (images[i].hasAttribute("alt")) {
    images[i].alt = "Old";
  } else {
    images[i].alt = "Elzero New";
  }

} 
















// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h3");
// let myP = document.createElement("p");

// let myHeadingText = document.createTextNode(" product title");
// let myPText = document.createTextNode("description");


// //append heading text 
// myHeading.appendChild(myHeadingText);

// //Add heading to main element 
// myMainElement.appendChild(myHeading);

// //append p text 
// myP.appendChild(myPText);

// //Add paragraph to main element 
// myMainElement.appendChild(myP);

// myMainElement.className = "product";



// document.body.appendChild(myMainElement);

// for (let i=1 ; i<=100 ; i++ ) {


// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h3");
// let myP = document.createElement("p");

// let myHeadingText = document.createTextNode(" product" + i);
// let myPText = document.createTextNode("description");


// //append heading text 
// myHeading.appendChild(myHeadingText);

// //Add heading to main element 
// myMainElement.appendChild(myHeading);

// //append p text 
// myP.appendChild(myPText);

// //Add paragraph to main element 
// myMainElement.appendChild(myP);

// myMainElement.className = "product";



// document.body.appendChild(myMainElement);
// }
//     ;