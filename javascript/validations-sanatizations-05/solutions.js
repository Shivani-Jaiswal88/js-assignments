// Module 1: The Daily Input Checks (Primitives, NaN, Null & Undefined)
//1ANS
// function sanitizeCustomerName(name) {
//   if(name === null || name === undefined || name === ""){
//     return "Unknown Granhak"
//   }else{
//     return name
//   }
// }
// console.log(sanitizeCustomerName("Ravi"));
// console.log(sanitizeCustomerName(null));
// console.log(sanitizeCustomerName(""));

//2ANS
// function validateSamosaPrice(price) {
// let a = Number.isNaN(price)
// return a === true ? 0: price
// }
// console.log(validateSamosaPrice(15));
// console.log(validateSamosaPrice(NaN));
// console.log(validateSamosaPrice(20));

//3ANS
// function cleanPhoneNumber(phone) {
//   return phone.trim()
// }
// console.log(cleanPhoneNumber(" 9988776655 "));
// console.log(cleanPhoneNumber("1234567890"));
// console.log(cleanPhoneNumber("  98765   "));

//4 ANS
// function validateWeight(weight) {
//  return 0 <= weight ? weight : 1
// }
// console.log(validateWeight(2));
// console.log(validateWeight(-5));
// console.log(validateWeight(0));

//5ANS
// function getSugarAmount(sugar) {
//   return sugar === undefined ? 2: sugar
// }
// console.log(getSugarAmount(undefined));
// console.log(getSugarAmount(0));
// console.log(getSugarAmount(4));

//6ANS
// function isCategoryValidString(category) {
//   return typeof category === "string" ? true : false
// }
// console.log(isCategoryValidString("Snacks"));
// console.log(isCategoryValidString(123));
// console.log(isCategoryValidString(true));

//7ANS
// function parseBillAmount(amountStr) {
//   return Number(amountStr)
// }
// console.log(parseBillAmount("100"));
// console.log(parseBillAmount("50.5"));
// console.log(parseBillAmount("0"));

//8ANS
// function sanitizeUdhaarFlag(flag) {
//   return flag === true ? true : false
// }
// console.log(sanitizeUdhaarFlag(true));
// console.log(sanitizeUdhaarFlag("true"));
// console.log(sanitizeUdhaarFlag(1));



// **Scenario:** Ek discount logic mein kisi ne bill ko 0 se divide kar diya aur result `Infinity` ban gaya!

// **Requirements:** Built-in `isFinite()` ka use karein. Agar value finite hai toh value return karein, warna `0` return karein.

function sanitizeDiscountMath(result) {
  // TODO: Check if result is finite
  return result === Infinity ? 0 : result
}
console.log(sanitizeDiscountMath(50));
console.log(sanitizeDiscountMath(100/0));

console.log(sanitizeDiscountMath(Infinity));

// - `sanitizeDiscountMath(50)` -> Expected: `50`
// - `sanitizeDiscountMath(100 / 0)` -> Expected: `0`
// - `sanitizeDiscountMath(Infinity)` -> Expected: `0`
// console.log(100/0);






// Module 2: The Structure Check (Object Validations)


// Module 3: Group Orders & Collection Checks (Array Validations)


// Module 4: Production Mixed Scenarios (Combining Concepts)


