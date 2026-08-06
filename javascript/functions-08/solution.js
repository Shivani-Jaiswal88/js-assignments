// Module 1: Function Parameters (Default, Rest) & `arguments` Object

// 1ANS
// function makeChai(type, sugar = 2) {
//   return `Making ${type} chai with ${sugar} spoons of sugar`;
// }
// console.log(makeChai("Masala", 3));
// console.log(makeChai("Ginger"));
// console.log(makeChai("Black",0));

//2ANS
// function calculateAutoFare(baseFare = 50, surge = 0) {
//   return baseFare += surge
// }
// console.log(calculateAutoFare());
// console.log(calculateAutoFare(50,20));
// console.log(calculateAutoFare(100));

// 3ANS
// function getSamosaPartyTotal(...prices) {
//   let sum = 0
//   for(let item of prices){
//     sum += item
//   }
//   return sum
// }
// console.log(getSamosaPartyTotal(10,20,30));
// console.log(getSamosaPartyTotal(15,15));
// console.log(getSamosaPartyTotal());


//4ANS
// function getMandiList(mainItem, ...extras) {
//   return `"Main: ${mainItem}, Extras: ${extras.length}"`
// }
// console.log(getMandiList("Aloo", "Pyaz", "Mirchi"));
// console.log(getMandiList("Gobhi"));
// console.log(getMandiList("Bhindi", "Dhaniya"));


//5ANS
// function legacySum() {
//   let sum = 0;
//   for(let i =0; i<arguments.length; i++){
//     sum += arguments[i]
//   }
//   return sum
// }
// console.log(legacySum(5,10,15));
// console.log(legacySum(100,200));
// console.log(legacySum());


//6ANS
// function findHighestTemp() {
//   let max =0 
//   for(let i =0; i<arguments.length; i++){
//     if(arguments[i] > max){
//         max = arguments[i]
//          return max
//     }
//   }
//    return  "Infinity"
// }
// console.log(findHighestTemp(30,45,20));
// console.log(findHighestTemp(10));
// console.log(findHighestTemp());



// Module 2: Arrow Functions & IIFEs


// Module 3: Scopes, Lexical Scoping & Closures


// Module 4: Recursion & The Function Stack


// Module 5: Callbacks, Higher-Order & Built-In Functions


