
// 1. solution 

var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits.indexOf("Banana");
    fruits[1] = "Mango";
var removeItem = fruits.pop();
var itemAdd = fruits.push("Watermelon");


console.log(fruits);

// 2. solution 

let joy = 55 ;
let Tom = 66 ;
let Jane = 95 ;
let Peter = 56 ;
let John = 40 ;
if (joy>=80) {
    console.log("The result of joy A");
     
}
else if (joy>= 60) {
    console.log("The result of joy B");
}
else if (joy>= 50) {
    console.log("The result of joy C");
}
else if (joy>= 40) {
    console.log("The result of joy D");
}
else {
    console.log("Tumi fail korcho , porer bar try koiro");
};
if (Tom>=80) {
    console.log("The result of Tom A");
     
}
else if (Tom>= 60) {
    console.log("The result of Tom B");
}
else if (Tom>= 50) {
    console.log("The result of Tom C");
}
else if (Tom>= 40) {
    console.log("The result of Tom D");
}
else {
    console.log("Tumi fail korcho , porer bar try koiro");
};
if (Jane>=80) {
    console.log("The result of Jane A");
     
}
else if (Jane>= 60) {
    console.log("The result of Jane B");
}
else if (Jane>= 50) {
    console.log("The result of Jane C");
}
else if (Jane>= 40) {
    console.log("The result of Jane D");
}
else {
    console.log("Tumi fail korcho , porer bar try koiro");
};
if (Peter>=80) {
    console.log("The result of Peter A");
     
}
else if (Peter>= 60) {
    console.log("The result of Peter B");
}
else if (Peter>= 50) {
    console.log("The result of Peter C");
}
else if (Peter>= 40) {
    console.log("The result of Peter D");
}
else {
    console.log("Tumi fail korcho , porer bar try koiro");
};
if (John>=80) {
    console.log("The result of John A");
     
}
else if (John>= 60) {
    console.log("The result of John B");
}
else if (John>= 50) {
    console.log("The result of John C");
}
else if (John>= 40) {
    console.log("The result of John D");
}
else {
    console.log("Tumi fail korcho , porer bar try koiro");
};

// 3.1 Solution 

let numberOne = 13 ;
let numberTwo = 759 ;
let numberThree = 95 ;

if ( numberOne>numberTwo && numberOne>numberThree ) {
    console.log ("The number One is biggest Number")
}
else if (numberTwo>numberOne && numberTwo>numberThree) {
    console.log("The number two  is   Biggest number");
}
else if (numberThree>numberOne && numberThree>numberTwo) {
    console.log("The number three is  Biggest number");
}
else{
    console.log("Something is error")
}

// 3.2 solution 

let legOne = 9 ;
let legTwo = 8;
let legThree = 9;

if (legOne == legTwo || legOne == legThree) {
    console.log('it is Isosceles triangle test') ;
}

else if (legTwo ==  legOne || legTwo == legThree) {
    console.log('it is Isosceles triangle') ;
}
else if (legThree ==  legOne || legThree == legTwo) {
    console.log('it is Isosceles triangle') ;
}
else {
    console.log("The triangle is not Isosceles ");
}
