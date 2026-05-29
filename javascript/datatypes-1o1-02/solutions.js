// Module 1: All About "String"
//1 ANS

// function greeting(name){
//     return `"Welcome ${name}"`
// }
// console.log(greeting("shivani"));
// console.log(greeting("Rohan"));

//2 ANS
// function Registration(){
//     let first_name = "shivani";
//     let Last_name = "kumari";
//     return `${first_name}, ${Last_name}`
// }
// console.log(Registration());

//3ANS 

// function receipt(item,price){
//     return `You bought a ${item} for ${price}`
// }
// console.log(receipt("shirt","$20"));

//4ANS 
// function checkpass(pass){
//     return pass.length
// }
// console.log(checkpass("4587684"));
// console.log(checkpass("secret123"));

//5ANS

// function coupone(user){
//     return user_finaly = user.toUpperCase();
//     
// }
// console.log(coupone("shivani"));
// console.log(coupone("diwali50"));

//6 ANS

// function email(email){
//     return email.toLowerCase();
// }
// console.log(email("SHIVANI@GMAIL.COM"));
// console.log(email("HELlo@GMAIL.COM"));

//7 not solve

// function getquote(text){
//     return text.replaceAll('"', '\''); 
// }
// console.log(getquote(`Einstein said, "Imagination is everything"`));
// `'Einstein said, "Imagination is everything."'`


// Module 2: Crunching "Numbers"

//1 ANS 
// function cart(price1,price2){
//     let sum = price1 + price2;
//     return sum
// }
// console.log(cart(150,50));

//2 ANS

// function iseven(num){
//     return num % 2 === 0
// }
// console.log(iseven(4));
// console.log(iseven(7));

//4 ANS

// function invoice(num){
//     return `"${num}"`
// }
// console.log(invoice(101));

//5ANS 
// nii solve hua 
// function cal(a,b){
//     if(a * b ===  NaN) {
//       return "true"
//     }else{
//        return "false" 
//     }
//     // return 
// }
// console.log(cal("abc" , 5));
// console.log(cal(5 , 5));

//6 ANS

// function calculateSquareArea(side){
//     return  side * side
// }
// console.log(calculateSquareArea(4));
// console.log(calculateSquareArea(5));


// 8 ANS
// function isStrictlyNumber(Val) {
//     if(typeof Val === 'number'){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(isStrictlyNumber(50));
// console.log(isStrictlyNumber("50"));
// console.log(isStrictlyNumber("sssd"));
// console.log(isStrictlyNumber("trues"));

// # Module 3: True or False ("Boolean")

//1ANS
// function toggleTheme(isDarkMode){
//     return !isDarkMode
// }
// console.log(toggleTheme(true));
// console.log(toggleTheme(false));

//2 ANS 
// function isAdult(age){
//     if(age >= 18){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isAdult(20));
// console.log(isAdult(16));

//3 ANS
// function isStrictlyEqual(a,b){
//     if(a === b ){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isStrictlyEqual(5,5));
// console.log(isStrictlyEqual(5,"5"));

//4 ANS
// function isloosely(a,b){
//     if(a == b){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isloosely(5, "5"));//T
// console.log(isloosely(10, 10)); //T
// console.log(isloosely("10", "10")); //T
// console.log(isloosely(7, "10")); //F

//5 ANS
// function isAcountActive(emailVerified,phoneVerified){
//     if(emailVerified === "shiv@gmail.com" && phoneVerified === 8576215255){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isAcountActive("shiv@gmail.com" , 8576215255));
// console.log(isAcountActive("shiv@gmail.coms" , 8576215255));

// 6ANS
// User apne account mein login kar sakta hai agar usne Username dala ho YA Email dala ho. Ek bhi mil jaye toh theek hai.

// function isAccount(username ,email){
//     if(username === "rahul" || email === "rahul@gmail.com"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isAccount("rahul", "rahul@gmail.com")); // T
// console.log(isAccount("rahul", "rahul123@gmail.com")); // T
// console.log(isAccount("rahul kumar", "rahul1524@gmail.com"));//F

// 7ANS 
// function isBoolean(boolean){
//     if(typeof boolean === 'boolean'){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isBoolean(true));//T
// console.log(isBoolean("true")); //F
// console.log(isBoolean(false));//T
// console.log(isBoolean("false"));//F

//8 ANS
// function isAllowed(role){
//     if(role !== "banned"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isAllowed("banned"));
// console.log(isAllowed("user"));


// Module 4: The Empty States ("Undefined" & "Null")


//1 ANS
// function isEmptyValue(userLocation){
//     // let userLocation 
//     return userLocation
// }
// console.log(isEmptyValue())

//3 ANS
// function checkDefaulValue(a){
//     return a
// }
// console.log(checkDefaulValue()); //undefined

//4 ANS
// function checkNull(a){
//     return typeof a
// }
// console.log(checkNull(null));

//5 ANS
// function areTheyLooselyEqual(){
//     if(null == undefined){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(areTheyLooselyEqual());

//6 ANS
// function isStrictlyEqual(){
//     if(null === undefined){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isStrictlyEqual());

//7 ANS
// function isundefined(val){
//     if(val === undefined){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isundefined(null));//f
// console.log(isundefined(undefined));//t


//8 ANS
// function isBIO(user){
//     return user ||  "No bio available"
// }
// console.log(isBIO());
// console.log(isBIO("pari"));
// console.log(isBIO("I love Coding"));





