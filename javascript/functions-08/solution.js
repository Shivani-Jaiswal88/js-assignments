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

//1ANS
// const getSamosaBill = (qty, price) =>  qty* price
// console.log(getSamosaBill(5, 10));
// console.log(getSamosaBill(2, 15));
// console.log(getSamosaBill(0,20));

//2ANS
// const checkToll = (vehicleNum) => {
//     if(vehicleNum%2==0){
//         return "Pass";
//     }else{
//         return "Wait"
//     }
// }
// console.log(checkToll(1234));
// console.log(checkToll(9999));
// console.log(checkToll(0));

// //3ANS
// const convertToRupee = (dollors) => 83*dollors
// console.log(convertToRupee(10));
// console.log(convertToRupee(2));
// console.log(convertToRupee(0));

// 4ANS
// const createPlayer = (pName) => ({ name: pName, score: 0 });
// console.log(createPlayer("Virat"));
// console.log(createPlayer("Rohit"));
// console.log(createPlayer(""));

// 5ANS
// const greet = (name) => `"Hello, ${name}"`
// console.log(greet("Aman"));
// console.log(greet("Raj"));
// console.log(greet(""));

// 6ANS
// const configStatus = (function () {
//   return `"App Initialized"`
// })();
// console.log(configStatus);

// 7ANS
// const AuthHeader = (function(){
//     let token = "XYZ"
//     return `"Bearer ${token}"`
// })()
// console.log(AuthHeader);

// 8ANS
// const initialLight = (function () {
//  if(Math.random()> 0.5){
//     return "Green"
//  }else{
//     return "Red"
//  }
// })();
// console.log(initialLight);
// console.log(["Green", "Red"].includes(initialLight));
// console.log(typeof initialLight);

// 9ANS
// const finalBill = (function (price, discount) {
//   let dis = price*discount / 100 
//   return price - dis
// })(100, 10);
// console.log(finalBill);

//10ANS
// const VadaPavSpice = (level) =>{
//     if(level>5){
//         return "Teekha"
//     }
//     return "Meetha"
// }
// console.log(VadaPavSpice(8));
// console.log(VadaPavSpice(3));
// console.log(VadaPavSpice(5));

//11ANS
// const findUserById = (userArray,id) =>{
// for(let key in userArray){
//     if(userArray[key].id === id){
//         return userArray
//     }
// }
//     return null
// }
// console.log(findUserById([{id: 1, name: "A"}], 1));
// console.log(findUserById([{id: 1, name: "A"}], 2));
// console.log(findUserById([],1));

//12ANS
// const systemInfo = (function () {
//   let version = "2.0";
//   return function () {
//     return `Version is ${version}`;
//   };
// })();
// console.log(systemInfo());
// console.log(systemInfo.version);
// console.log(typeof systemInfo);



// Module 3: Scopes, Lexical Scoping & Closures

//1ANS
// let shopName = "Global Kirana";
// function getLocalshopName(){
//     let shopName = "Local kirana"
//     return shopName
// }
// console.log(getLocalshopName());
// console.log(shopName);

//2ANS
// function dadaJi() {
//   let khazana = "Gold";
//   function pota() {
//     return khazana
//   }
//   return pota();
// }
// console.log(dadaJi());

//3ANS
// function outerRestaurant(){
//     let dish = "samos"
//     function innerchef(){
//         let dish = "kachori";
//         return dish
//     }
//     return innerchef()
// }
// console.log(outerRestaurant());

//4ANS
// function createKhata() {
//   let balance = 0;
//   return function () {
//     return balance += 10
//   };
// }
// const k = createKhata();
// console.log(k());
// console.log(k());
// const k2 = createKhata()
// console.log(k2());

//5ANS
// function tokenMachine() {
//   let currentToken = 0;
//   return function(){
//     return currentToken+=1
//   }
// }
// const getTkn = tokenMachine()
// console.log(getTkn());
// console.log(getTkn());
// console.log(getTkn());

//6ANS
// function createVIPPass(secretPin) {
//   function checkpin(input){
//     return input === secretPin 
//   }
//   return checkpin
// }
// const check = createVIPPass(1234)
// console.log(check(1234));
// console.log(check(9999));
// console.log(check.secretPin);

//8ANS
// function createGullak() {
//   let coins = [];
//   function piggybank(coin){
//     let res = coins.push(coin)
//     return coins
//   }
//   return piggybank
// }
// const gullak = createGullak()
// console.log(gullak(5));
// console.log(gullak(10));
// const gullaks = createGullak()
// console.log(gullaks(1));


//9ANS
// function atmTracker(){
//   let attempts = 0;
//   function atmwork(){
//     attempts++
//     if(attempts>3){
//       return "Blocked"
//     }else{
//        return "try again"
//     }
//   }
//   return atmwork
// }
// const result = atmTracker()
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

//11ANS
// function salaryManager(base) {
//   function salaryincrement(currentsalary){
//     return base += currentsalary
//   }
//   return salaryincrement
// }
// const mySalary = salaryManager(10000)
// console.log(mySalary(2000));
// console.log(mySalary(3000));
// const hrSalary = salaryManager(50000)
// console.log(hrSalary(10000));

//12ANS
// function createBankAccount() {
//   let balance = 0;
//   return {
//     deposit: function (amt) {
//       return balance += amt
//     },
//     getBalance: function () {
//       return balance
//     },
//   };
// }
// const acc = createBankAccount()
// console.log(acc.deposit(100));
// console.log(acc.getBalance());
// console.log(acc.balance);
// console.log(acc.deposit(50));
// console.log(acc.getBalance());


// Module 4: Recursion & The Function Stack

//1ANS
// function countdown(n) {
//   if (n === 0) return [0];
//   return [n].concat(countdown(n - 1));
// }
// console.log(countdown(3));
// console.log(countdown(1));
// console.log(countdown(0));

//2ANS
// function factorial(n) {
//   if(n<=1){
//     return 1
//   }
//   return n* factorial(n-1)
// }
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));

//4ANS
// function getLength(arr) {
//   if(arr.length === 0){
//     return 0
//   }else{
//     return 1 + getLength(arr.slice(1))
//   }
// }
// console.log(getLength([1, 2, 3]));
// console.log(getLength(["A", "B", "C", "D"]));
// console.log(getLength([]));


//5ANS
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }
//   return reverseString(str.substring(1)) + str.charAt(0);
// }
// console.log(reverseString("Ravi"));
// console.log(reverseString("JS"));
// console.log(reverseString(""));


//6ANS
// function power(base, exp) {
//   if(exp === 0){
//     return 1
//   }
//   return base** exp
// }
// console.log(power(2,3));
// console.log(power(5,2));
// console.log(power(10,0));


//7ANS
// function fibonacci(n) {
//   if(n === 0){
//     return 0
//   }else if(n === 1){
//     return 1
//   }
//   return fibonacci(n -1) + fibonacci(n-2)
// }
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(0));

//10ANS
// function dev(){
//   return "task Done"
// }
// function lead(){
//   return "Task Done by lead"
// }
// function manager(){
//   return "Task Done by lead by manager"
// }
// console.log(dev());
// console.log(lead());
// console.log(manager());


//12ANS
// function createSlug(str) {
//   if(!str.includes(" ")){
//     return str
//   }
//   return createSlug(str.replace(" ", "-"))
// }
// console.log(createSlug("Paneer butter masala"));
// console.log(createSlug("tea"));
// console.log(createSlug(" a b c "));


// Module 5: Callbacks, Higher-Order & Built-In Functions


