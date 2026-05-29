// Module 1: Variable Declarations (`var`, `let`, and `const`)
// 1 ANS

// const gstRate = 0.18;
// // gstRate  = 0.20;
// function calculateTotal(price){
//     return price +( price * gstRate)
// }
// console.log(calculateTotal(100));
// console.log(calculateTotal(200));
// console.log(calculateTotal(300));


// 2 ANS
// let playerscore = 0 ;
// function addrun(run){
//     return playerscore += run;
// }
// console.log(addrun(5));
// console.log(addrun(6));
// console.log(addrun(4));


// 3 ANS 

// var username = "Rahul";
// function greeting(){
//     return `"Hello, ${username}!"`;
// }
// console.log(greeting());

// 4 ANS 

// const cart = ["shoes", "watch"];
// function additem(item){
//     cart.push(item);
//     return cart
// }

// console.log(additem("bag"));
// console.log(additem("Tv"));


//5 ANS

// let userId  
// function registration(id){
//     return userId  = id
// }
// console.log(registration(`'101'`));


// Module 2: Variables Naming Rules

//  Ek junior developer ne variables banaye hain par JavaScript ke naming rules follow nahi kiye, isliye syntax errors aa rahe hain./

// let 1stPlayer = "Virat";
// let user-name = "Rohit";
// let @age = 35;

//1 ANS 
// let player1 = "virat";
// let user_name = "Rohit";
// let $age = 35;

// console.log(`${player1} , ${user_name}, ${$age}`);
// function getDetailse(){
//     return `${firstplayer} , ${user_name}, ${$age}`;
// }
// console.log(getDetailse());

//2 ANS

// let Bank_name = "SBI";
// let User_name = "Rahul";
// let Account   = 125487689787;
// let isActive = true;

// function userAccountDetailse(){
//     // return [`${Bank_name},${User_name},${Account},${isActive}`]
//     return [Bank_name,User_name, Account, isActive];
// }
// console.log(userAccountDetailse());

// 3 ANS 

// let class = 10;
// let return = "passed";
//start
// let Student_class = 10;
// let result = "passed";
// function studentDetails(){
//     return `Student is in grade ${Student_class} and has ${result}`;
// }
// console.log(studentDetails());


//4 ANS

// let couponCode = "DIWALI50";
// function checkcoupone(){
//     if(couponCode === "DIWALI50"){
//         return "Disaccount Applied";
//     }else{
//         return "Invalid coupone"
//     }
// }
// console.log(checkcoupone());

// 5 ANS

// **Scenario (Problem):** Ek developer ne Simple Interest calculate karne ka formula likha hai par variables ke naam `a`, `b`, `c` rakh diye hain,
//  jisse code samajh nahi aa raha.

// function Interest(principal,Rate,Time){
//     let d =  (principal * Rate * Time) /100;
//     return d
// }
// console.log(Interest(10000,5,2));


// Module 3: Variable Scopes (Block, Function, and Global)

//1 ANS
// let baseUrl = `"[https://api.mywebsite.com](https://api.mywebsite.com)"`;

// function loginForm(){
//     // return baseUrl
//     return baseUrl + "/Login";
// }
// console.log(loginForm());
// function registrationform(){
//     // return baseUrl
//     return baseUrl  + "/Registration";
// }
// console.log(registrationform());


// 2 ANS 
// my solve question 

// function pin(){
//     let ATM_PIN = 1542;
//     return ATM_PIN
// }
// console.log(pin());
// console.log(pin()); 

// assignment solve

// function pin(inputpin){
//     let secretCode = 1524;
//     return inputpin === secretCode;
// }
// console.log(pin(1524));
// console.log(pin(5867));
// console.log(typeof secretCode);


//3 ANS
// function discount(amount){
//     if(amount> 1000){
//         let finaly =  (amount* 20) / 100;
//         let fix = amount - finaly;
//         return fix
//     }else{
//         return amount
//     }
// }
// console.log(discount(2000));


//4 ANS
//ye problem thi
// for(var i = 0; i<5; i++){
//     console.log(i);
// }
//   console.log("hii" ,i);
// ye solution tha uska

// for(let i = 0; i<5; i++){
//     console.log(i);
// }
//   console.log("hii" ,i); not work this line


//5
// let theme = "dark";
// function themes(){
//     let theme = "light";
//     return theme
// }
// console.log(themes());





// Module 4: Variable Hoisting

//1 ANS
// console.log(a); // undefined
// var a = "Rohan";
// console.log(a); // Rohan

// function hos(){
//     console.log(a)
//     var a = "Rohan";
//     return a
// }
// // console.log(hos());
// console.log(hos());

//2ANS
// function getCity(city) {
//   // Fix this code to avoid ReferenceError
//   let message = `I live in ${city}`;
//   return message;
// }
// console.log(getCity("Mumbai"));

//5 ANS
// let player = "playerReady"
// function gamezone(){
//     if(player === "playerReady"){
//         return "GameStart"
//     }else{
//         return "Error"
//     }
// }

// console.log(gamezone());

// console.log(checkGameStatus());
// function checkGameStatus() {
//   // Fix the order to prevent hoisting bugs
//   if (isReady === true) {
//     return "Start Game";
//   } else {
//     return "Wait";
//   }
// }
// var isReady = true;
// console.log(checkGameStatus());


