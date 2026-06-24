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



// Module 3: Aggregations & Calculations (Manual Reduce)


// Module 4: Relational Data Mapping (Basic Joins)


// Module 5: Complex Real-World API Payloads (Master Level)


