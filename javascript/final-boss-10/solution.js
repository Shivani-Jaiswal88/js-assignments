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

//6 ANS
// const checkEligibility = (birthYear) => {
//   const currentYear = 2026;
//   const age = currentYear - birthYear
//   return (age >= 18)? true : false
// };

// let res = checkEligibility(2000)
// console.log(res);
// res = checkEligibility(2010)
// console.log(res);
// res = checkEligibility(2008)
// console.log(res);
// res = checkEligibility(2026)
// console.log(res);

//7 ANS
// const formatAddress = (addressObj) => {
//     let res = []
//  for(let item in addressObj){
//     res.push(addressObj[item])
// }
// return res.join(",")
// };
// result = formatAddress({city: "Delhi", zip: "110001"})
// console.log(result);
// result = formatAddress({street: "M.G Road", state: "MH"})
// console.log(result);
// result = formatAddress({})
// console.log(result);
// result = formatAddress({street: "A", city: "B", zip: "C"})
// console.log(result);

//8ANS
// const sanitizeBio = (bioString) => {
//   let clean = bioString.replaceAll(/[<>]/g, "");
//   return clean
// };
// let res = sanitizeBio("Hello <script>alert(1)</script>")
// console.log(res);
// res = sanitizeBio("I love <coding>")
// console.log(res);
// res = sanitizeBio("Normal text")
// console.log(res);
// res = sanitizeBio("<<>>")
// console.log(res);

//9ANS
// const isAdmin = (rolesArray) => {
//     return  rolesArray.includes("Admin")
// };
// let res = isAdmin(["editor", "Admin", "viewer"])
// console.log(res);
// res = isAdmin(["viewer", "user"])
// console.log(res);
// res = isAdmin([])
// console.log(res);
// res = isAdmin(["ADMINISTRATOR"])
// console.log(res);

//11ANS
// const formatReferral = (code) => {
//   return code.toUpperCase().slice(0 ,8)

// };
// let res = formatReferral("welcome20")
// console.log(res);
// res = formatReferral("abc")
// console.log(res);
// res = formatReferral("superlongcode")
// console.log(res);
// res = formatReferral("")
// console.log(res);

//12ANS
// const generateOTP = (() => {
//  let count = "1000"
//  return function inner(){
//    return count ++;
//  };

// })();
// console.log(generateOTP());
// console.log(generateOTP());
// console.log(generateOTP());
// console.log(generateOTP());

// Module 2: Shopping Cart & Order Processing

//1ANS
// const getCartTotal = (cartItems) => {
//   let total = 0;
//   for(let item in cartItems){
//     let value = cartItems[item].price * cartItems[item].quantity
//     total += value
//   }
//   return total
// };

// let res = getCartTotal([{price: 10, quantity: 2}, {price: 5, quantity: 4}])
// console.log(res);
// res = getCartTotal([{price: 100, quantity: 1}])
// console.log(res);
// res = getCartTotal([])
// console.log(res);
// res = getCartTotal([{price: 50, quantity: 0}])
// console.log(res);

//2ANS
// const getOrderSummary = (cart) => {
//   let str = []
//   for(let item in cart){
//     str.push(cart[item].name)
//   }
//   return str.join(',')
// };

// let res = getOrderSummary([{name: "Pizza"}, {name: "Pasta"}])
// console.log(res);
// res = getOrderSummary([{name: "Burger"}])
// console.log(res);
// res = getOrderSummary([])
// console.log(res);
// res = getOrderSummary([{name: "Coke"}, {name: "Fries"}, {name: "Wrap"}])
// console.log(res);

//3ANS
// const applyDiscount = (total, discount) => {
//   let value = total - discount
//   return (value < 0)? 0 : value;
// };
// let res = applyDiscount(200, 50)
// console.log(res);
// res = applyDiscount(30, 50)
// console.log(res);
// res = applyDiscount(100, 0)
// console.log(res);
// res = applyDiscount(0, 20)
// console.log(res);

// Module 3: User Profiles & Settings Data


// Module 4: Inventory & Content Management


// Module 5: Analytics & Report Generation


// Module 6: Role-Based Access & Security Rules

