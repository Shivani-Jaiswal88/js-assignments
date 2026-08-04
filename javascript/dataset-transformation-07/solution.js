// Module 1: Data Cleaning & Sanitization (Manual Filtering)


//1ANS
// function cleanPrices(prices) {
//     let validprice = []
//     for(let value of prices){
//         if(value === null || value === undefined){
//             continue
//         }
//         validprice.push(value)
//     }
//     return validprice
// }
// console.log(cleanPrices([10,null,20,undefined,30]));
// console.log(cleanPrices([null,undefined]));
// console.log(cleanPrices([50,60]));


//2ANS
// function getAvailableItems(menu) {
//   let update = []
//     for(let value of menu){
//         if(value.inStock === false){
//             continue
//         }
//         update = [value]
//     }
//     return update
// }
// console.log(getAvailableItems([{name: "Dosa", inStock: true}, {name: "Idli", inStock: false}]));
// console.log(getAvailableItems([{name: "Tea", inStock: false}]));
// console.log(getAvailableItems([{name: "Coffee", inStock: true}]));

//3ANS
// function cleanPhoneNumbers(phones) {
//   let clean = []
//   let text 
//   for(let value of phones){
//     text = value.replace("+91","")
//     clean.push(text.trim())
//   }
//   return clean
// }
// console.log(cleanPhoneNumbers(["+91 9876543210", "9998887776"]));
// console.log(cleanPhoneNumbers([" +919999999999 "]));
// console.log(cleanPhoneNumbers([]));

//4ANS
// function filterActiveUsers(usersObj) {
//     let update = {}
//     for(let key in usersObj){
//         if(usersObj[key].isActive === false){
//             continue
//         }
//         update[key] = usersObj[key]
//     }
//     return update
// }
// console.log(filterActiveUsers({u1: {name: "Raj", isActive: true}, u2: {name: "Aman", isActive: false} }));
// console.log(filterActiveUsers({u1:{name: "A", isActive: false}}));
// console.log(filterActiveUsers({u1: {name: "B", isActive: true}}));


//6ANS
// function filterAdults(ages) {
//     let Adult_age = []
//     for(let value of ages){
//         if(value>= 18){
//             Adult_age.push(value)
//         }
//     }
//     return Adult_age
// }
// console.log(filterAdults([12,18,25,16]));
// console.log(filterAdults([10,15]));
// console.log(filterAdults([20]));

//7ANS
// function removeDuplicates(ids) {
//     let ID = []
//     for(let value of ids){
//         if(ID.includes(value) === false){
//             ID.push(value)
//         }
//     }
//     return ID
// }
// console.log(removeDuplicates([101,102,101,103]));
// console.log(removeDuplicates([1,1,1]));
// console.log(removeDuplicates([]));

//8ANS
// function validateMenu(items) {
//   let update = []
//     for(let value of items){
//         if(value.price === undefined){
//             continue

//         }
//         update = [value]
//     }
//     return update
// }
// console.log(validateMenu([{name: "Tea", price: 10}, {name: "Coffee"}]));
// console.log(validateMenu([{name: "Water", price: 0}]));
// console.log(validateMenu([{name: "Milk"}]));

//10ANS
// function cleanProfile(profileObj) {
//     for(let key in profileObj){
//         if(profileObj[key] === "" || profileObj[key] === undefined ||profileObj[key] === null){
//             delete profileObj[key]
//         }
//     }
//     return profileObj
// }
// console.log(cleanProfile({name: "Raj", age: null, city: "" }));
// console.log(cleanProfile({ phone: "123", isActive: false }));
// console.log(cleanProfile({ bio: undefined }));

// Module 2: Data Extraction & Shaping (Manual Mapping)

//1ANS
// function extractNames(users) {
//   let menu = []
//   for(let value of users){
//     menu.push(value.name)
//   }
//   return menu
// }
// console.log(extractNames([{id: 1, name: "Raj"}, {id: 2, name: "Neha"}]));
// console.log(extractNames([{name: "Aman"}]));
// console.log(extractNames([]));

//2ANS
// function addSalePrice(products) {
//   for(let value of products){
//    value.salePrice = value.price - (value.price*10)/100 
//   }
//   return products
// }
// console.log(addSalePrice([{name: "Shirt", price: 100}]));
// console.log(addSalePrice([{name: "Bag", price: 50}]));
// console.log(addSalePrice([]));

//4ANS
// function flattenSeats(rows) {
//   let flat = []
//   for(let value of rows){
//     for(let item of value){
//         flat.push(item)
//     }
//   }
//   return flat
// }
// console.log(flattenSeats([["A1", "A2"], ["B1", "B2"]]));
// console.log(flattenSeats([["VIP1"], ["VIP2"]]));
// console.log(flattenSeats([]));


//6ANS
// function generateFullNames(users) {
//   for(let value of users){
//     let a = value.firstName +" "+value.lastName
//     value.fullname = a
// }
// return users
// }
// console.log(generateFullNames([{firstName: "Virat", lastName: "Kohli"}]));
// console.log(generateFullNames([{firstName: "Aman", lastName: "Gupta"}]));
// console.log(generateFullNames([]));


//10ANS
// function swapDictionary(dict) {
//     let result1 = {}
//     for (let key in dict) {
//         let result = dict[key]
//         result1[result] = key
//     }
//     return result1
// }
// console.log(swapDictionary({ "yes": "haan", "no": "nahi" }));
// console.log(swapDictionary({ "water": "pani" }));
// console.log(swapDictionary({}));


// Module 3: Aggregations & Calculations (Manual Reduce)

//1ANS
// function calculateCartTotal(cartItems) {
//   let total = 0  
//   for(let value of cartItems){
//     let sum = value.price*value.qty
//     total += sum 
//   }
//   return total
// }
// console.log(calculateCartTotal([{price: 100, qty: 2}, {price: 50, qty: 1}]));
// console.log(calculateCartTotal([{price: 200, qty : 3}]));
// console.log(calculateCartTotal([]));


//4ANS
// function getAverageRating(reviews) {
//   let sum = 0
//   let rating = reviews.length
//   for(let value of reviews){
//     sum += value.stars
//   }
//   if(rating === 0){
//     return 0
//   }
//    return sum / rating
// }
// console.log(getAverageRating([{stars: 5}, {stars: 4}, {stars: 3}]));
// console.log(getAverageRating([{stars: 5}, {stars: 5}]));
// console.log(getAverageRating([]));

//6ANS
// function getGrandTotal(nestedBills) {
//   let sum = 0;
//   for(let inner of nestedBills){
//     for(let outer of inner){
//         sum += outer
//     }
//   }
//   return sum
// }
// console.log(getGrandTotal([[10, 20], [30, 40]]));
// console.log(getGrandTotal([[50], [50]]));
// console.log(getGrandTotal([]));


//7ANS
// function isOrderComplete(items) {
//   let value
//   for(let key in items){
//     value = items[key].status
//   }
//   if(value === "Delivered" || value === undefined){
//     return true
//   }
//   return false
// }
// console.log(isOrderComplete([{status: "Delivered"}, {status: "Delivered"}]));
// console.log(isOrderComplete([{status: "Delivered"}, {status: "Pending"}]));
// console.log(isOrderComplete([]));


//8ANS
// function hasPendingAction(orders) {
//   let value
//   for(let key in orders){
//     value = orders[key].status
//   }
//   if(value === "Pending"){
//     return true
//   }
//   return false
// }
// console.log(hasPendingAction([{status: "Delivered"}, {status: "Pending"}]));
// console.log(hasPendingAction([{status: "Delivered"}]));
// console.log(hasPendingAction([]));

//9ANS
// function mergeSettings(settingsArray) {
//   let result = {}
// for(let value of settingsArray){
//    result = {
//   ...result,
//   ...value
// }
// }
// return result
// }
// console.log(mergeSettings([{volume: 50}, {theme: "light"}]));
// console.log(mergeSettings([{a: 1}, {a: 2, b: 3}]));
// console.log(mergeSettings([]));

//10 ANS
// function calculateTotalTax(cart) {
//     let TotalTax = 0
// for(let key in cart){
//     if(cart[key].isTaxable === true){
//        TotalTax= cart[key].price *0.05
//     }
// }
//   return TotalTax
// }
// console.log(calculateTotalTax([{price: 100, isTaxable: true},{price: 50, isTaxable: false}]));
// console.log(calculateTotalTax([{price: 200, isTaxable: true}]));
// console.log(calculateTotalTax([{price: 100, isTaxable: false}]));

// Module 4: Relational Data Mapping (Basic Joins)

//1ANS
// function joinUserAddress(users, addresses) {
//     let result = []
//     for(let i = 0; i<users.length; i++){
//         for(let j = 0; j<addresses.length; j++){
//             if(users[i].id === addresses[j].userId){
//             users[i].address = addresses[j];
//             }
//         }
//           result.push(users[i]);
//     }

//     return result
// }
// console.log(joinUserAddress([{id: 1, name: "A"}], [{userId: 1, city: "Delhi"}]));
// console.log(joinUserAddress([{id: 2, name: "B"}], []));
// console.log(joinUserAddress([], [{userId: 1, city: "Pune"}]));


//2ANS
// function mapCategoryNames(products, categoryDict) {
//   for(let key in products){
//     for(let keys in categoryDict){
//         delete products[key].categoryId;
//         products[key].categoryName = categoryDict[keys];
//     }
//   }
//   return products
// }
// console.log(mapCategoryNames([{name: "TV", categoryId: 101}], {101: "Electronics"}));
// console.log(mapCategoryNames([{name: "Novel", categoryId: 102}], {102: "Books"}));
// console.log(mapCategoryNames([], {101: "Tech"}));

//3ANS
// function syncStock(oldStock, newStock) {
//     let result = {}
//     for (let key in oldStock) {
//         for (let keys in newStock) {
//             if (oldStock[key].id === newStock[keys].id) {
//                 oldStock[key].qty += newStock[keys].qty
//             }
//         }
//     }
//     result = [...oldStock, ...newStock]
//     return result
// }
// console5.log(syncStock([{ id: 1, qty: 10 }], [{ id: 1, qty: 5 }]));
// console.log(syncStock([{ id: 1, qty: 10 }], [{ id: 2, qty: 5 }]));
// console.log(syncStock([], [{ id: 1, qty: 2 }]));

//5 ANS
// function assignDeliveries(orders, boysArray) {
//   for(let index in orders){ 
//    let key = index % boysArray.length
//    orders[index].boy = boysArray[key]  
// }
// return orders
// }
// console.log(assignDeliveries([{id: 1}, {id: 2}, {id: 3}], ["Ravi", "Aman"]));
// console.log(assignDeliveries([{id: 1}], ["Suresh"]));
// console.log(assignDeliveries([], ["Aman"]));

//8ANS
// function getPriceDrops(oldPrices, newPrices) {
//   let result = []
//   for(let key in newPrices){
//    if(oldPrices[key].id === newPrices[key].id){
//     if(newPrices[key].price < oldPrices[key].price){
//         result.push(newPrices[key])
//     }
//    }
//   }
//    return result
// }
// console.log(getPriceDrops([{id: 1, price: 100}], [{id: 1, price: 80}]));
// console.log(getPriceDrops([{id: 2, price: 50}], [{id: 2, price: 60}]));
// console.log(getPriceDrops([],[]));
// console.log(getPriceDrops([{id: 2, price: 50}], [{id: 2, price: 40}]));

//9ANS
// function applyUpdates(orders, updates) {
//   for(let key in orders){
//     if(orders[key].id === updates[key].id){
//         return orders = updates[key]
//     }
//   }
//   return orders
// }
// console.log(applyUpdates([{id: 1, status: "Pending"}], [{id: 1, status: "Shipped"}]));
// console.log(applyUpdates([{id: 1, name: "A"}], [{id: 2, name: "B"}]));
// console.log(applyUpdates([], [{id: 1, status: "Done"}]));

//10ANS
// function consolidateLedger(orders, payments) {
//   let result = []
//   for(let key1 in orders){
//     for(let key2 in payments){
//         if(orders[key1].txnId === payments[key2].txnId){
//         orders[key1].mode = payments[key2].mode;
//         result.push(orders[key1])
//         }
//     }
//   }
//   return result
// }
// console.log(consolidateLedger([{id: 1, txnId: "TX12"}], [{txnId: "TX12", mode: "UPI"}]));
// console.log(consolidateLedger([{id: 1, txnId: "TX99"}], [{txnId: "TX88", mode: "Cash"}]));
// console.log(consolidateLedger([],[]));


// Module 5: Complex Real-World API Payloads (Master Level)

//1ANS
// function extractUsersSafely(apiResponse) {
//   if(apiResponse.payload){
//     if(apiResponse.payload.users){
//         return apiResponse.payload.users
//     }
//   }
//   return []
// }
// console.log(extractUsersSafely({payload: {users: [{name: "Raj"}]}}));
// console.log(extractUsersSafely({payload: null}));
// console.log(extractUsersSafely({}));

//2ANS
// function arrayToMap(itemsArray) {
//   let result ={}
//   for(let key in itemsArray){
//     let a = itemsArray[key]
//    result[a.id] = a

//   }
//   return result 
// }
// console.log(arrayToMap([{id: 5, name: "Pen"}]));
// console.log(arrayToMap([{id: 10, name: "Book"}, {id: 11, name: "Bag"}]));
// console.log(arrayToMap([]));

//3ANS
// function mapToArray(itemsMap) {
//   let result = []
//   for(let key in itemsMap){
//     result.push(itemsMap[key])
//   }
//   return result
// }
// console.log(mapToArray({ 5: {id: 5, name: "Pen"} }));
// console.log(mapToArray({}));
// console.log(mapToArray({ 1: {a: 1}, 2: {b: 2} }));


//4ANS
// function extractAllMenuNames(menuData) {
//   let result = []
//   for(let key in menuData){
//      result.push(menuData[key].name) 
//     for(let key1 in menuData[key].subCategories){
//         result.push(menuData[key].subCategories[key1].name)
//     } 
//   }
  
//   return result
// }
// console.log(extractAllMenuNames([{name: "Men", subCategories: [{name: "Shirts"}]}]));
// console.log(extractAllMenuNames([{name: "Electronics", subCategories: []}]));
// console.log(extractAllMenuNames([]));

function getActiveUserNames(users) {
  // TODO: Filter and map in a single loop
  let result = []
  for(let key in users){
    if(users[key].isActive === true){
        result.push(users[key].name)
    }
  }
  return result
}
console.log(getActiveUserNames([{name: "Raj", isActive: true}, {name: "Aman", isActive: false}]));
console.log(getActiveUserNames([{name: "Neha", isActive: false}]));
console.log(getActiveUserNames([]));





