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

//10 ANS
// function sanitizeDiscountMath(result) {
//   return result === Infinity ? 0 : result
// }
// console.log(sanitizeDiscountMath(50));
// console.log(sanitizeDiscountMath(100/0));
// console.log(sanitizeDiscountMath(Infinity));


// Module 2: The Structure Check (Object Validations)

//1 ANS
// function isStrictObject(data) {
//   return data !== null && typeof data === 'object' && !Array.isArray(data) ? true : false
//   }
// console.log(isStrictObject({name : "Raju"}));
// console.log(isStrictObject(null));
// console.log(isStrictObject([1,2,3]));

//2 ANS
// function hasPriceKey(itemObj) {
//   return itemObj.price === undefined ? false : true
// }
// console.log(hasPriceKey({item : "Sugar", price: 40}));
// console.log(hasPriceKey({item : "salt"}));
// console.log(hasPriceKey({item :"Rice", price : undefined}));

//3 ANS
// function validateCartObject(cartObj) {
//     let keys = Object.keys(cartObj)
//     return keys.length === 0 ? "Cart Empty": "processing"
// }
// console.log(validateCartObject({}));
// console.log(validateCartObject({milk : 2}));
// console.log(validateCartObject({ bread: 1, butter: 1 }));

//4ANS
// function sanitizeUserEmail(user) {
//     user.email = user.email?.toLowerCase()
//     return user.email === undefined ? "Should not crash if no email" :user 
// }
// console.log(sanitizeUserEmail({ email: "Aman@GMAIL.com" }));
// console.log(sanitizeUserEmail({email: "test@test.com"}));
// console.log(sanitizeUserEmail({name : "Raj"}));

//5ANS
// function getDeliveryCity(customer) {
//   customer = customer.address?.city
//   return customer === undefined ?"Pick up at store" : customer
// }
// console.log(getDeliveryCity({address: {city: "pune"}}));
// console.log(getDeliveryCity({name : "Ravi"}));
// console.log(getDeliveryCity({}));

//6 ANS
// function sanitizeInventory(inventory) {
//     if(inventory && typeof inventory.stockQty === "string"){
//         inventory.stockQty = Number(inventory?.stockQty)
//     }
//     return inventory    
// }
// console.log(sanitizeInventory({ stockQty: "50" }));
// console.log(sanitizeInventory({stockQty : 20}));
// console.log(sanitizeInventory({stockQty: 0}));

// this my code 
// function sanitizeInventory(inventory) {
//     inventory = typeof inventory.stockQty === "string" ? Number(inventory?.stockQty) : inventory
//     return inventory

// }
// console.log(sanitizeInventory({ stockQty: "50" }));
// console.log(sanitizeInventory({stockQty : 20}));
// console.log(sanitizeInventory({stockQty: 0}));

//7 ANS
// function applyDefaultSpice(order) {
//     if(order.spiceLevel === undefined){
//         order.spiceLevel = "Medium"
//         return order
//     }else{
//         return order
//     }
// }
// console.log(applyDefaultSpice({ item: "Masala" }));
// console.log(applyDefaultSpice({ spiceLevel: "High" }));
// console.log(applyDefaultSpice({}));

//8 ANS
// function cleanObject(billObj) {
//     if(billObj.discount === undefined){
//         delete billObj.discount
//         return billObj
//     }else{
//     return billObj
//     }
// }
// console.log(cleanObject({total : 100, discount : undefined}));
// console.log(cleanObject({total : 100, discount : 10}));
// console.log(cleanObject({total: 50}));


//9ANS
// function preventRoleHack(userPayload) {
//   if(userPayload.role === userPayload.role){
//     delete userPayload.role
//     return userPayload
//   }else{
//     return userPayload
//   }
// }
// console.log(preventRoleHack({name:"Aman",role:"Admin"}));
// console.log(preventRoleHack({name : "Ravi"}));
// console.log(preventRoleHack({role:"user"}));


// Module 3: Group Orders & Collection Checks (Array Validations)

//1 ANS
// function ensureArray(data) {
//   return Array.isArray(data) === true ? data :  []
// }
// console.log(ensureArray(["Samose", "Kachori"]));
// console.log(ensureArray("Samose", "Kachori"));
// console.log(ensureArray(null));

//2 ANS
// function checkConsumption(platesArray) {
//   return platesArray.length === 0 ? "No item eaten" : "Generate Bill"
// }
// console.log(checkConsumption([]));
// console.log(checkConsumption(["puri1"]));
// console.log(checkConsumption(["puri1","puri2"]));



//3 ANS trim nii hua 
// function enforceCouponLimit(items) {
//   return items.length > 3? items.slice(0,3) : items

// }
// console.log(enforceCouponLimit(["chai","coffee","Biscuit","Rusk"]));
// console.log(enforceCouponLimit(["chai","Coffee"]));
// console.log(enforceCouponLimit([1,2,3,4,5]));

//4ANS
// function getFirstInQueue(queue) {
//   return queue.length > 0 ? queue[0] : "Queue khali hai"
// }
// console.log(getFirstInQueue(["Ravi","Aman"]));
// console.log(getFirstInQueue([]));
// console.log(getFirstInQueue(["Neha"]));


//5ANS 
// function validateOrder(item) {
// for(let i = 0; i<menu.length; i++){
//   menu[i]
// }
//  if(menu?.includes("Butter") === true || item?.includes("Butter") === true){
//   return "Not a menu"
//  }else{
//   return "preparing"  
//  }
// }
// console.log(validateOrder("Classic"));
// console.log(validateOrder("Butter"));
// console.log(validateOrder("cheese"));


//6ANS
// function sanitizeAddons(orderObj) {
//   if(orderObj.addons === undefined || orderObj.addons === null || orderObj.addons === false){
//     orderObj.addons = []
//     return orderObj
//   }else{
//   [orderObj.addons]
//   return orderObj
//   }
// }
// console.log(sanitizeAddons({item : "Pizza"}));
// console.log(sanitizeAddons({item : "Burger", addons: ["cheese"]}));
// console.log(sanitizeAddons({addons: null}));

//7ANS
// function isFirstItemNumber(priceList) {
// return typeof priceList[0] === 'number' ? true : false

// }

// console.log(isFirstItemNumber([100,200]));
// console.log(isFirstItemNumber(["100",200]));
// console.log(isFirstItemNumber([]));


//8ANS
// function removeSpam(chatArray) {
//   if(chatArray[0] === "SPAM"){
//     chatArray.shift()
//     return chatArray
//   }else{
//     return chatArray
//   }
// }
// console.log(removeSpam(["SPAM","Hello","Hi"]))
// console.log(removeSpam(removeSpam(["Good", "Morning"])));
// console.log(removeSpam(["SPAM"]));

//9ANS
// function safeMerge(bill1, bill2) {
//   if(Array.isArray(bill2) === true){
//     return bill1.concat(bill2)
//   }else{
//     return bill1
//   }

// }
// console.log(safeMerge([10,20],[30]));
// console.log(safeMerge([10],null));
// console.log(safeMerge([5]));


//10ANS
// function findRice(inventory) {
//   return inventory = inventory.indexOf("Rice") === -1 ? `Not Found` : `Found at ${inventory.indexOf("Rice")}`
// }
// console.log(findRice(["Dal","Rice","Aata"]));
// console.log(findRice(["Sugar","salt"]));
// console.log(findRice(["Rice"]));
// console.log(findRice(["Dal","Aata","Rice"]));

// Module 4: Production Mixed Scenarios (Combining Concepts)

//1 ANS
// function validateRegistration(user) {
//   if(!user.name || user.name.trim() === ""){
//     return "Name required"
//   }else if(user.age<= 18){
//     return "Underage"
//   }else{
//     return "Valid"
//   }
// }
// console.log(validateRegistration({ name: "Raj", age: 20 }));
// console.log(validateRegistration({ name: "", age: 25 }));
// console.log(validateRegistration({name:"Raj",age:16}));

//2ANS
// function sanitizeCurrency(amount) {
//     return typeof amount === "string" ? "0.00": amount.toFixed(2)
// }
// console.log(sanitizeCurrency(25.678));
// console.log(sanitizeCurrency("500"));
// console.log(sanitizeCurrency(10));
//3ANS
// function sanitizeAddress(addressObj) {
//   let a = Number(addressObj.pincode)
//   if (addressObj.street === undefined) {
//     addressObj.street = "N/A"
//     addressObj.pincode = a
//     return addressObj
//   } else {
//     addressObj.pincode = a
//     return addressObj
//   }

// }
// console.log(sanitizeAddress({ city: "Mumbai", pincode: "400001" }));
// console.log(sanitizeAddress({ street: "MG Road", pincode: 110001 }));
// console.log(sanitizeAddress({ pincode: "123" }));

//4ANS
// function cleanSearchQuery(query) {
//   if(query.trim()?.toLowerCase() === ""){
//     query = null
//     return query
//   }else{
//     return query?.trim()?.toLowerCase()
//   }
  
// }
// console.log(cleanSearchQuery("   paneer Tikka   "));
// console.log(cleanSearchQuery("   "));
// console.log(cleanSearchQuery("samosa"));


//5ANS
// const allowedRoles = ["Admin", "Manager"];
// function checkAccess(userObj) {
//   return allowedRoles.includes(userObj.role) === true ? true : false
// }
// console.log(checkAccess({ role: "Admin" }));
// console.log(checkAccess({ role: "User" }));
// console.log(checkAccess({}));

//6ANS
// function isIndianNumber(phoneStr) {
//   if(isNaN(phoneStr)){
//     return false
//   }else if(phoneStr.trim()?.length == 10){
//     return true
//   }
// }
// console.log(isIndianNumber("9876543210"));
// console.log(isIndianNumber("  9876543210  "));
// console.log(isIndianNumber("98765ABCDE"));


//7ANS
// function validateDeliveryDate(dateStr) {
//   return new Date(dateStr).getTime()  ? "Valid Date" : "Invalid Date"
// }
// console.log(validateDeliveryDate("2026-05-21"));
// console.log(validateDeliveryDate("Hello World"));
// console.log(validateDeliveryDate("2026/12/31"));

//8ANS
// function collectErrors(user) {
//   let error = []
//  if(user.name === undefined && user.email === undefined){
//     error.push("name Missing"),error.push("email Missing")
//     return error
//  }else if(user.name === undefined){
//     error.push("name Missing")
//     return error
//   }else if(user.email === undefined){
//     error.push("email Missing")
//     return error
//   }else{
//     return error
//   }
// }
// console.log(collectErrors({name: "Aman" , email: "a@a.com"}));
// console.log(collectErrors({name: "Aman"}));
// console.log(collectErrors({}));

//9ANS
// function getDiscountRate(isVIP, isNewUser) {
//   return isVIP === true ? 20 :(isNewUser === true )? 10: 0
// }
// console.log(getDiscountRate(true,false));
// console.log(getDiscountRate(false,true));
// console.log(getDiscountRate(false,false));




