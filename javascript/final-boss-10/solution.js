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

//5ANS
// const filterInStock = (cart) => {
//   return cart.filter(item => item.inStock === true)
// };
// let res = filterInStock([{id: 1, inStock: true}, {id: 2, inStock: false}])
// console.log(res);
// res = filterInStock([{id: 1, inStock: false}])
// console.log(res);
// res = filterInStock([{id: 1, inStock: true}])
// console.log(res);
// res = filterInStock([])
// console.log(filterInStock([]));

//6ANS
// const updateQuantity = (cart, itemId, newQuantity) => {
//   for(let item of cart){
//     if(item.id === itemId){
//         item.qty = newQuantity
//     }
//   }
//   return cart
// };
// let res = updateQuantity([{id: 1, qty: 2}], 1, 3)
// console.log(res);
// res = updateQuantity([{id: 2, qty: 1}], 1, 5)
// console.log(res);
// res = updateQuantity([{id: 1, qty: 2}], 1, 0)
// console.log(res);
// res = updateQuantity([], 1, 2)
// console.log(res);


//7ANS
// const countCartItems = (cart) => {
//   let sum = 0;
//   for(let item of cart){
//     sum += item.qty
//   }
//   return sum
// };

// let res = countCartItems([{qty: 2}, {qty: 3}])
// console.log(res);
// res = countCartItems([{qty: 1}])
// console.log(res);
// res = countCartItems([{qty: 0}, {qty: 0}])
// console.log(res);
// res = countCartItems([])
// console.log(res);


//8ANS
// const calculateTax = (cart) => {
//     let discount = 0;
//   for(let item of cart){
//     if(item.type === "food"){
//        discount += item.price * 0.05 % 100
//     }else if(item.type === "drink"){
//       discount += item.price * 0.18 % 100   
//     }
//   }
//   return discount
// };

// let res = calculateTax([{type: "food", price: 100}, {type: "drink", price: 100}])
// console.log(res);
// res = calculateTax([{type: "food", price: 200}])
// console.log(res);
// res = calculateTax([{type: "other", price: 100}])
// console.log(res);
// res = calculateTax([])
// console.log(res);


//9ANS
// const addDeliveryFee = (subtotal) => {
//     if (subtotal === 0) {
//         return 0
//     }
//     if (subtotal < 500) {
//         return subtotal + 50
//     } else {
//         return subtotal
//     }
// };
// let res = addDeliveryFee(300)
// console.log(res);
// res = addDeliveryFee(500)
// console.log(res);
// res = addDeliveryFee(600)
// console.log(res);
// res = addDeliveryFee(0)
// console.log(res);

//10ANS
// const formatCurrency = (amount) => {
// return `₹${(amount).toFixed(2)}`
// }
// let res = formatCurrency(500)
// console.log(res);
// res = formatCurrency(250.5)
// console.log(res);
// res = formatCurrency(10.123)
// console.log(res);
// res = formatCurrency(0)
// console.log(res);

//11ANS
// const checkAvailability = (cart) => {
//     for (let item of cart) {
//         if (item.isAvailable === true) {
//         } else if (item.isAvailable === false) {
//             return false
//         }
//     }
//     return true

// };

// let res = checkAvailability([{ isAvailable: true }, { isAvailable: true }])
// console.log(res);
// res = checkAvailability([{ isAvailable: true }, { isAvailable: false }])
// console.log(res);
// res = checkAvailability([{ isAvailable: false }])
// console.log(res);
// res = checkAvailability([])
// console.log(res);


//12ANS
// const groupItems = (cart) => {
//   let dis = {Food : [], Drink : []};
//   for(let item of cart){
//     if(item.type === "food"){
//         dis.Food.push(item);
//     }else if(item.type === "drink"){
//         dis.Drink.push(item)
//     }
//   }
//   return dis
// };
// let res = groupItems([{name: "A", type: "food"}, {name: "B", type: "drink"}])
// console.log(res);
// res = groupItems([{name: "A", type: "food"}])
// console.log(res);
// res = groupItems([])
// console.log(res);
// res = groupItems([{name: "X", type: "unknown"}])
// console.log(res);

// Module 3: User Profiles & Settings Data

//1ANS
// const mergeSettings = (defaults, userSettings) => {
// return {...defaults,...userSettings}
// };
// let res = mergeSettings({theme: "light", autoplay: true}, {theme: "dark"})
// console.log(res);
// res = mergeSettings({quality: "720p"}, {quality: "1080p"})
// console.log(res);
// res = mergeSettings({a: 1}, {})
// console.log(res);
// res =mergeSettings({}, {b: 2})
// console.log(res);

//2ANS
// const getActiveProfile = (profiles) => {
//   for(let item of profiles){
//     if(item.isActive === true){
//         return item
//     }
//   }
// };
// let res = getActiveProfile([{name: "A", isActive: false}, {name: "B", isActive: true}])
// console.log(res);
// res =getActiveProfile([{name: "C", isActive: false}]) 
// console.log(res);
// res = getActiveProfile([])
// console.log(res);
// res = getActiveProfile([{name: "D", isActive: true}, {name: "E", isActive: true}])
// console.log(res);

//3ANS
// const toggleAutoplay = (settings) => {
//   let result =  !settings.autoplay
//   settings.autoplay = result
//   return settings
// };
// let res = toggleAutoplay({autoplay: true})
// console.log(res);
// res = toggleAutoplay({autoplay: false})
// console.log(res);
// res = toggleAutoplay({theme: "dark", autoplay: true})
// console.log(res);
// res = toggleAutoplay({})
// console.log(res);


//4ANS
// const addToHistory = (history, movieId) => {
//   if(!history.includes(movieId)){
//     return  history.push(movieId)
// }
//     return history
// }
// let res = addToHistory(["m1", "m2"], "m3")
// console.log(res);
// res = addToHistory(["m1", "m2"], "m2")
// console.log(res);
// res = addToHistory([], "m1")
// console.log(res);
// res = addToHistory(["x"], "y")
// console.log(res);

//5ANS
// const isPremiumUser = (user) => {
//   if(user.subscriptionPlan  === "Gold" || user.subscriptionPlan === "Platinum" &&  user.isExpired === false){
//     return true
//   }else{
//     return false
//   }
// };
// let res = isPremiumUser({subscriptionPlan: "Gold", isExpired: false})
// console.log(res);
// res = isPremiumUser({subscriptionPlan: "Silver", isExpired: false})
// console.log(res);
// res = isPremiumUser({subscriptionPlan: "Platinum", isExpired: true})
// console.log(res);
// res = isPremiumUser({})
// console.log(res);

//6ANS
// const getGenres = (profile) => {
//   return profile.preferences?.genres ?? []
// };
// let res = getGenres({preferences: {genres: ["Action", "Sci-Fi"]}})
// console.log(res);
// res = getGenres({preferences: {}})
// console.log(res);
// res = getGenres({})
// console.log(res);
// res = getGenres({preferences: {genres: []}})
// console.log(res);




// Module 4: Inventory & Content Management


// Module 5: Analytics & Report Generation


// Module 6: Role-Based Access & Security Rules

