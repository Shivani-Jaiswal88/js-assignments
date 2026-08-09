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

//7ANS
// function formatGuestList(family, ...kids) {
//   return [family, ...kids]
// }
// console.log(formatGuestList("Sharma", "Ravi", "Neha"));
// console.log(formatGuestList("Gupta"));
// console.log(formatGuestList("Verma", "Rahul"));

//8ANS
// function getFirstArgument() {
//   return arguments[0]
// }
// console.log(getFirstArgument("Hello","World"));
// console.log(getFirstArgument(99,100));
// console.log(getFirstArgument());


//9ANS
// function calculateDiscountedTotal(discount = 10, ...prices) {
//     let sum = 0
//   for(let value of prices){
//     sum += value
//   }
//   return sum -= discount
// }
// console.log(calculateDiscountedTotal(20,100,50));
// console.log(calculateDiscountedTotal(undefined, 100, 50));
// console.log(calculateDiscountedTotal(0,100));

//10ANS
// function createJointMission(...teams) {
//   let result = []
//   for(let i = 0; i<teams.length; i++){
//     result.push(...teams[i])
//   }
// return result
// }
// console.log(createJointMission(["A", "B"], ["C", "D"]));
// console.log(createJointMission(["X"]));
// console.log(createJointMission([], ["Y"]));

//11ANS
// function convertArgumentsToArray() {
//   let result = []
//   for(let i = 0; i<arguments.length; i++){
//     result =[...arguments]
//   }
//   return result
// }
// console.log(convertArgumentsToArray(1,2,3));
// console.log(convertArgumentsToArray("A","B"));
// console.log(convertArgumentsToArray());

//12ANS
// function setupProfile(name, settings = {theme :"dark"}) {
//   return `${name} uses ${settings.theme} theme`;
// }
// console.log(setupProfile("Raj", { theme: "light" }));
// console.log(setupProfile("Aman"))
// console.log(setupProfile("Neha", { theme: "blue" }));




// Module 2: Arrow Functions & IIFEs


// Module 3: Scopes, Lexical Scoping & Closures


// Module 4: Recursion & The Function Stack


// Module 5: Callbacks, Higher-Order & Built-In Functions


