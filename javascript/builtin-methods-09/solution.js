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

//7ANS
// function extractRatings(menuData) {
//   let Rate = menuData.map(item => item.details.rating)
//   return Rate
// }
// console.log(extractRatings([{details: {rating: 4}}, {details: {rating: 5}}]));
// console.log(extractRatings([{details: {rating: 3.5}}]));
// console.log(extractRatings([{details: {rating: 1}}, {details: {rating: 2}}, {details: {rating: 3}}]));
// console.log(extractRatings([]));


//8ANS
// function generateSlugs(names) {
//   let slug = names.map(item => item.toLowerCase().split(" ").join("-"))
//   return slug
// }
// console.log(generateSlugs(["Shahi Paneer", "Dal Makhani"]));
// console.log(generateSlugs(["Tea"]));
// console.log(generateSlugs(["A B C", "X Y Z"]));
// console.log(generateSlugs([]));


// Module 2: Data Extraction (`Array.filter`)

//1ANS
// function getTrainsToDelhi(trains) {
//   let des = trains.filter(station => station.to === "Delhi")
//   return des
// }
// console.log(getTrainsToDelhi([{name: "Rajdhani", to: "Delhi"}, {name: "Shatabdi", to: "Mumbai"}]));
// console.log(getTrainsToDelhi([{name: "Local", to: "Pune"}]));
// console.log(getTrainsToDelhi([{name: "T1", to: "Delhi"}, {name: "T2", to: "Delhi"}]));
// console.log(getTrainsToDelhi([]));

//2ANS
// function getAvailableTrains(trains) {
//   let seatAvailable = trains.filter(seat => seat.seats > 0)
//   return seatAvailable
// }
// console.log(getAvailableTrains([{id: 1, seats: 50}, {id: 2, seats: 0}]));
// console.log(getAvailableTrains([{id: 1, seats: 0}, {id: 2, seats: -5}]));
// console.log(getAvailableTrains([{id: 1, seats: 100}]));
// console.log(getAvailableTrains([]));

//3ANS
// function removeCancelled(trains) {
//   let cancelled = trains.filter(train => train.isCancelled === false)
//   return cancelled
// }
// console.log(removeCancelled([{id: 1, isCancelled: true}, {id: 2, isCancelled: false}]));
// console.log(removeCancelled([{id: 1, isCancelled: true}]));
// console.log(removeCancelled([{id: 1, isCancelled: false}, {id: 2, isCancelled: false}]));
// console.log(removeCancelled([]));


//4ANS
// function getPremiumTrains(trains) {
//   let getPremium = trains.filter(train => train.price > 1500)
//   return getPremium
// }
// console.log(getPremiumTrains([{id: 1, price: 1600}, {id: 2, price: 800}]));
// console.log(getPremiumTrains([{id: 1, price: 1500}]));
// console.log(getPremiumTrains([{id: 1, price: 2000}, {id: 2, price: 3000}]));
// console.log(getPremiumTrains([]));

//5ANS
// function searchTrains(trains, query) {
//   let result = trains.filter(train => train.name.includes(query))
//   return result
// }
// console.log(searchTrains([{name: "Duronto Express"}, {name: "Shatabdi"}], "Express"));
// console.log(searchTrains([{name: "Pune Mail"}], "Express"));
// console.log(searchTrains([{name: "Express A"}, {name: "Express B"}], "Express"));
// console.log(searchTrains([],"test"));


//6ANS
// function filterACCoaches(coaches) {
//   let onlyaccoaches = coaches.filter(coach => coach.includes("AC"))
//   return onlyaccoaches
// }
// console.log(filterACCoaches(["1AC", "General", "Sleeper", "3AC"]));
// console.log(filterACCoaches(["General", "Sleeper"]));
// console.log(filterACCoaches(["AC Chair Car", "General"]));
// console.log(filterACCoaches([]));

//7ANS
// function cleanSchedule(stops) {
//   let result = stops.filter(Boolean => Boolean)
//   return result
// }
// console.log(cleanSchedule(["Delhi", null, "Agra", "", undefined]));
// console.log(cleanSchedule([null, undefined, ""]));
// console.log(cleanSchedule(["Mumbai", "Pune"]));
// console.log(cleanSchedule([]));

//8ANS
// function getAvailableTrainNames(trains) {
//   let result = trains.filter(train => train.seats > 0).map(train => train.name)
//   return result
// }
// console.log(getAvailableTrainNames([{name: "A", seats: 10}, {name: "B", seats: 0}]));
// console.log(getAvailableTrainNames([{name: "X", seats: 0}, {name: "Y", seats: 0}]));
// console.log(getAvailableTrainNames([{name: "P", seats: 5}, {name: "Q", seats: 5}]));
// console.log(getAvailableTrainNames([]));





// Module 3: Aggregation (`Array.reduce`)


// Module 4: Sorting Data (`Array.sort`)


// Module 5: Object Methods Mastery

