// Module 1: Data Transformation (`Array.map`)
//1ANS
// function getDishNames(menuArray) {
//   let menulist = menuArray.map(list => list.name)
//   return menulist
// }
// console.log(getDishNames([{name: "Dosa"}, {name: "Idli"}]));
// console.log(getDishNames([{name: "Paneer Tikka"}]));
// console.log(getDishNames([{name: "Tea"}, {name: "Coffee"}, {name: "Milk"}]));
// console.log(getDishNames([]));


//2ANS
// function applyGST(prices) {
//   let update = prices.map(updateprice => updateprice* 1.05)
//   return update
// }
// console.log(applyGST([100, 200]));
// console.log(applyGST([50]));
// console.log(applyGST([0,1000]));
// console.log(applyGST([]));


//3ANS
// function addFoodTags(menu) {
//   let updatemenu = menu.map(list => list.isVeg === true ? {...list, tag: "🟢 Veg"} : {...list, tag : "🔴 Non-Veg"       } )
//   return updatemenu
// }
// console.log(addFoodTags([{item: "Dal", isVeg: true}]));
// console.log(addFoodTags([{item: "Chicken", isVeg: false}]));
// console.log(addFoodTags([{item: "Roti", isVeg: true}, {item: "Fish", isVeg: false}]));
// console.log(addFoodTags([]));


//4ANS
// function formatPrices(prices) {
// let updateformat = prices.map(item => `₹ ${item}/-`);
//   return updateformat
// }
// console.log(formatPrices([150,200]));
// console.log(formatPrices([99]));
// console.log(formatPrices([0,5]));
// console.log(formatPrices([]));


//5ANS
// function markBestsellers(dishNames) {
//   let bestdish = dishNames.map((item,index) => index === 0 || index === 1? `${item}"(Bestseller)"`: item )
//   return bestdish
// }
// console.log(markBestsellers(["Dosa", "Idli", "Vada"]));
// console.log(markBestsellers(["Tea"]));
// console.log(markBestsellers(["A","B","C","D"]));
// console.log(markBestsellers([]));


//6ANS
// function convertToObjects(dishNames) {
//   let converobj = dishNames.map((item, index) => `{id : ${index+1},  name : ${item}}`)
//   return converobj
// }
// console.log(convertToObjects(["Dosa", "Idli"]));
// console.log(convertToObjects(["Tea",]));
// console.log(convertToObjects(["A", "B","C"]));
// console.log(convertToObjects([]));

function extractRatings(menuData) {
  // TODO: Safely map out the inner rating value
  let Rate = menuData.map(item => item.details.rating)
  return Rate
}
console.log(extractRatings([{details: {rating: 4}}, {details: {rating: 5}}]));
console.log(extractRatings([{details: {rating: 3.5}}]));
console.log(extractRatings([{details: {rating: 1}}, {details: {rating: 2}}, {details: {rating: 3}}]));
console.log(extractRatings([]));

// Module 2: Data Extraction (`Array.filter`)


// Module 3: Aggregation (`Array.reduce`)


// Module 4: Sorting Data (`Array.sort`)


// Module 5: Object Methods Mastery

