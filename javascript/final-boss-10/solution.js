// Module 1: User Registration & Onboarding Pipeline

//ANS
// const normalizeEmail = (email) => {
//   if(typeof email === "string"){
//     return email.toLowerCase().trim()
//   }else{
//     return null
//   }
// };
// let result = normalizeEmail("  Hello@World.com ")
// console.log(result);
// result = normalizeEmail("ADMIN@APP.IN")
// console.log(result);
// result = normalizeEmail("user@domain.com")
// console.log(result);
// result =  normalizeEmail(12345)
// console.log(result);

//2ANS
// const extractDigits = (phoneStr) => {
//   let value = "";
//   for(let num of phoneStr){
//     if(num >= 0 && num <= 9){
//         value += num.trim()
//     }
//   }
//   return value
// };
// let result = extractDigits("+91-987-654")
// console.log(result);
// result = extractDigits("(91) 9876 543 210")
// console.log(result);
// result = extractDigits("NoNumbersHere")
// console.log(result);
// result = extractDigits("123abc456")
// console.log(result);

//3ANS
// const isStrongPassword = (pwd) => {
//   const symbolRegex = /[@#$]/;
//   if(pwd.length == 8 && symbolRegex.test(pwd) &&  /\d/.test(pwd)){
//     return true
//   }else{
//     return false
//   }
// };

// let result = isStrongPassword("Pass@123")
// console.log(result);
// result = isStrongPassword("password")
// console.log(result);
// result = isStrongPassword("short@1")
// console.log(result);
// result = isStrongPassword("NoNumbers@Here")
// console.log(result);


// Module 2: Shopping Cart & Order Processing


// Module 3: User Profiles & Settings Data


// Module 4: Inventory & Content Management


// Module 5: Analytics & Report Generation


// Module 6: Role-Based Access & Security Rules

