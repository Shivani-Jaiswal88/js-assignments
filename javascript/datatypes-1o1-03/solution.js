// Module 1: The World of Arrays

//1 ANS
// function getGroceryList() {
//   // TODO: Create and return the groceries array
//   return groceries = ["Milk","Bread","Eggs"]
// }
// console.log(getGroceryList());

// 2ANS self
// function isguestvipname(){
//     let guest = ["Rahul","Pari","kunal"]
//     return guest[0]
// }
// console.log(isguestvipname());

// function isguestvipname(guest){
//     return guest[0]
// }
// console.log(isguestvipname(["Rahul","Pari","kunal"]));
// (["Virat", "Rohit", "Bumrah"])


//4 ANS
// function countItem(){
//     let item = ["Laptops", "Mobiles", "Tablets", "Watches","earphone"]
//     return item.length
// }
// console.log(countItem());

// 5ANS
// function addToCart(cart,newItem){
//     let item = ["Shoes"]
//     item.push(newItem)
//     return item
// }
// // console.log(ToAddCart("Bata"));
// console.log(addToCart(["shoes"],"Campus"));
// console.log(addToCart(["shoes"],"Bata"));

//6 ANS
// function removelastitem(){
//     let remove = ["apple","banana", "orange"]
//     remove.pop()
//     return remove
// }
// console.log(removelastitem());

//7 ANS
// function addemergencypatient(a){
//     let queue = ["A","B","C"]
//     queue.unshift(a)
//     return queue
// }
// console.log(addemergencypatient("emrgencypatient"));
//8ANS
// function checkarraytype(){
//     let array = [1,2,3]
//     return typeof array
// }
// console.log(checkarraytype());// object

//9 ANS
// function checkarraytype(data){
//     return Array.isArray(data)
// }
// console.log(checkarraytype(["Rahul",5,"true"]));
// console.log(checkarraytype("Rahul"));

//10 ANS
// function  mergePlaylists(list1,list2){
//     return list1.concat(list2)
// }
// console.log(mergePlaylists(["Song A"], ["Song B", "Song C"]));

// Module 2: The Structure of Objects

//1 ANS
// function createUser(userName, userAge){
//     let profile = {
//         name : username,
//         Age : userage,
//         isActive : "True"
//     }
//     return profile
// }
// console.log(createUser("rahul", 21));

//2 ANS
// function getproductprice(brand,price){
//     let product ={
//         title : brand,
//         price : price
//     }
//     return product.price
// }
// console.log(getproductprice("phone",500));

// function getproductprice(product){
//     return product.price
// }
// console.log(getproductprice({ title: "Phone", price: 500 }));

// 3ANS
// function getDynamicValue(obj, keyName) {
//   return obj[keyName]
// }
// console.log(getDynamicValue({ car: "Honda", color: "Red" }, "color"));// Red
// console.log(getDynamicValue({ car: "Honda", color: "Red" }, "car","color"));// output ye aa rha hai Honda but mujhe output aisa hona chahiye tha Honda Red

//5 ANS
// function Updatescore(player,newSore){ // player pra ka work kr rha hai 
//     let record = {
//         name : "Ravi",
//         score : 10
//     }
//     record.score = newSore
//     return record
// }
// console.log(Updatescore({name: "Ravi",score:10},50));

//6ANS
// function sanitizeProfile(user){
//     delete user.password
//     return user
// }
// console.log(sanitizeProfile({email: "a@b.com", password: "123" }));

//7 ANS
// function checktype(val){
//     if(typeof val === 'object'){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(checktype({ a: 1 }));
// console.log(checktype("string"));
// console.log(checktype(5));

//8ANS
// function getCityName(userRecord) {
//   return userRecord.location.city
// }
// console.log(getCityName({ name: "Raj", location: { city: "Delhi" }}));

//9ANS
// function getAllKeys(dataObject) {
//   return Object.keys(dataObject)
// }
// console.log(getAllKeys({ a: 1, b: 2 , d: 5}));


//10 ANS
// function getAllValues(dataObject) {
//   return Object.values(dataObject)
// }
// console.log(getAllValues({ apples: 10, oranges: 20,}));

// Module 3: Basic Math & Date Objects

//1ANS
// function roundPrice(price) {
//   return Math.round(price)
// }
// console.log(roundPrice(99.6));
// console.log(roundPrice(99.4));
// console.log(roundPrice(99.5));
// console.log(roundPrice(99.8));
// console.log(roundPrice(45.4));

//2ANS
// function getRequiredPages(exactPages) {
//   return Math.ceil(exactPages)
// }
// console.log(getRequiredPages(2.1));
// console.log(getRequiredPages(5.8));

//3ANS
// function getGameScore(rawScore) {
//   return Math.floor(rawScore)
// }
// console.log(getGameScore(4.9));
// console.log(getGameScore(10.1));

//4ANS
// function getHighestBid(bid1, bid2, bid3) {
//   return Math.max(bid1,bid2,bid3)
// }
// console.log(getHighestBid(100, 500, 250));

//5ANS
// function getCheapestPrice(p1, p2, p3) {
//   return Math.min(p1,p2,p3)
// }
// console.log(getCheapestPrice(120,99,100));


// Module 4: String, Number, Boolean Methods & `typeof` Mixed

// 1ANS
// function getTextLength(text) {
//   return text.length
// }
// console.log(getTextLength("Hello World"));

//2ANS
// function getcapitalize(code){
//     return code.toUpperCase()
// }
// // console.log(getcapitalize("fhkl20"));
// console.log(getcapitalize("free50"));

//3ANS
// function hasSpamWord(comment) {
//   return comment.includes("offer")
// }

// console.log(hasSpamWord("Get a special offer today"));
// console.log(hasSpamWord("Hello friend"));

//4 ANS

// function parseUserAge(ageString) {
//   return Number.parseInt(ageString)
// }
// console.log(parseUserAge("25 year"));//25
// console.log(parseUserAge("hleoo"));//Nan

//5 ANS
// function formatCurrency(priceNumber) {
//   return priceNumber.toFixed(2)
// }
// console.log(formatCurrency(10.1234));


//6 ANS
// function forceBoolean(value) {
//   return Boolean(value)
// }
// console.log(forceBoolean(0));
// console.log(forceBoolean("Hello"));

//7 ANS
// function stringTypes() {
//   let a = "Hello";
//   let b = new String("Hello");
//   return [typeof a, typeof b]
// }
// console.log(stringTypes());

//8ANS
// function numberTypes() {
//   return [typeof 50, typeof NaN]
// }
// console.log(numberTypes());

//9ANS
// function checkBoolType(flag) {
//   return typeof flag
// }
// console.log(checkBoolType(true));
// console.log(checkBoolType("Hello"));

function identifyData(anyData) {
  return typeof anyData
}

console.log(identifyData(100));
console.log(identifyData({ a: 1 }));
console.log(identifyData([1,2]));

// - `identifyData(100)` -> Expected: `"number"`
// - `identifyData({ a: 1 })` -> Expected: `"object"`
// - `identifyData([1, 2])` -> Expected: `"object"