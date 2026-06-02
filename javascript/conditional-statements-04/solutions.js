// Module 1: The Daily Decisions (`if`, `else if`, `else`)

//1ANS
// function makePanipuri(flavor) {
//   if(flavor === "teekha"){
//     return "spicy water"
//   }else if(flavor === "medium"){
//     return "mixed water"
//   }else if(flavor === "meetha"){
//     return "sweet water"
//   }
// }
// console.log(makePanipuri("teekha"));
// console.log(makePanipuri("medium"));
// console.log(makePanipuri("meetha"));

//2 ANS
// function checkSamosaStock(orderQty, stock) {
//   if(orderQty < stock){
//     return "ye lo samosa";
//   }else{
//     return "kal aana beta"
//   }
// }
// console.log(checkSamosaStock(5,2));
// console.log(checkSamosaStock(2,10));

//3 ANS
// function processPayment(isRegularCustomer) {
//   if(isRegularCustomer === true){
//     return "Udhaar likh liya"
//   }else{
//     return "Cash do bhaiya"
//   }
// }
// console.log(processPayment(true));
// console.log(processPayment(false));

//4 ANS
// function getFreeDhaniya(billAmount) {
//     if(billAmount > 100){
//         return "Free dhaniya added"
//     }else{
//         return "Dhaniya 10 RS"
//     }
// }
// console.log(getFreeDhaniya(150));
// console.log(getFreeDhaniya(50));

//5 ANS
// function calculateAutoFare(baseFare, time) {
//   if(time >=22){
//     return baseFare + 50
//   }else{
//     return baseFare
//   }
// }
// console.log(calculateAutoFare(100,23));
// console.log(calculateAutoFare(100,14));

//6ANS
// function orderBiryani(friendsArray) {
//   if(3 <= friendsArray.length){
//     return "Full"
//   }else{
//     return "Half"
//   }
// }
// console.log(orderBiryani(["rahul","roshan","sumit"]));
// console.log(orderBiryani(["rahul","roshan",]));
// console.log(orderBiryani(["rahul","roshan","sumit", "suraj","sameer"]))

//7ANS
// function Oderchai(spoon){
//     if(spoon > 3){
//         return "Bhai diabetes ho jayegi"
//     }else{
//         return "Mast Kadak Chai"
//     }
// }
// console.log(Oderchai(2));
// console.log(Oderchai(4)); 

//8 ANS
// function buyJalebi(kg){
//     if(kg >= 2){
//         return "Sirf 2 Kg allowes hai"
//     }else{
//         return "Pack kar diya"
//     }
// }
// console.log(buyJalebi(1.5));
// console.log(buyJalebi(5));

//10 ANS
// function checkShopStatus(day) {
//   if(day === "sunday"){
//     return "Dukan band hai"
//   }else{
//     return "Welcome"
//   }
// }
// console.log(checkShopStatus("sunday"));
// console.log(checkShopStatus("monday"));


// Module 2: The Menu & Choices (`switch...case`)

// 1ANS
// function getChaiPrice(size) {
//   // TODO: Use switch-case to return 10, 20, or 25
//   switch(size){
//     case  "cutting":
//         return 10
//         break;
//     case "Full":
//         return 20
//         break;
//     case "kulhad":
//         return 25
//         break;
//         default:
//             return 0
//   }
// }
// console.log(getChaiPrice("Full"));
// console.log(getChaiPrice("kulhad"));
// console.log(getChaiPrice("jambo"));

//2ans
// function getPaniFeedback(paniType) {
//   switch(paniType){
//     case "pudina":
//         return  "Refreshing";
//         break;
//     case "hing":
//         return  "Digestion good"
//         break;
//     case "jeera":
//         return "spicy"
//         break;
//     case "khatta":
//         return "sweet water"
//         break;
//         default:
//             return "Standard Pani"
//   }
// }
// console.log(getPaniFeedback("hing"));
// console.log(getPaniFeedback("jeera"));
// console.log(getPaniFeedback("meetha"));

//3 ANS
// function getspcialsamosa(day){
//     switch(day){
//         case "monday":
//             return "Aloo"
//             break;
//         case "wednesday":
//             return "dal"
//             break;
//         case "sunday":
//             return "paneer"
//             break;
//         default:
//             return "Mix veg"
//     }
// }
// console.log(getspcialsamosa("sunday"));
// console.log(getspcialsamosa("friday"));

//4 ANS
// functionhandlePaymentMethod(payment){
//     switch(payment){
//         case "Cash":
//             return "Galle mein daalo"
//             break;
//         case "upi":
//             return "Scanner dekho"
//             break;
//         case "udhaar":
//             return "khata book nikalo"
//             break;
//     }
// }
// console.log(handlePaymentMethod("upi"));

//5 ANS
// function  getJuiceByCode(menu){
//     switch(menu){
//         case 1:
//             return  "Mosambi"
//             break;
//         case 2:
//             return "Orange"
//             break;
//         case 3:
//             return "Mix fruit"
//             break;
//         default:
//             return "water"
//     }
// }
// console.log( getJuiceByCode(5));
// console.log( getJuiceByCode(2));

//6 ANS
// function checkTrainClass(classType) {
//     switch (classType) {
//         case "FC":
//             return "(First Class)";
//             break;
//         case "SC":
//             return "(Second Class)";
//             break;
//         case "AC":
//             return "(AC Local)";
//             break;
//     }
// }
// console.log(checkTrainClass("AC"));

//7ANS
// function getVadaPavSpice(spiceLevel) {
//   switch(spiceLevel){
//     case 1:
//         return "Bacha party"
//         break;
//          case 2:
//         return "Medium"
//         break;
//          case 3:
//         return "Kaan se dhua".
//         break;
//   }
// }
// console.log(getVadaPavSpice(2));

//8 ANS
// function getFestivalDiscount(eventObj) {
//   {festival :"Holi"}
//   switch(eventObj.festival){
//     case "Holi":
//         return 15
//         break;
//     case "Dewali":
//         return 20
//         break;
//     case "Eid":
//         return 15
//        break;
//   }
// }
// console.log(getFestivalDiscount({ festival: "Holi" }));
// console.log(getFestivalDiscount({ festival: "Dewali" }));

//9 ANS
// function prepareDosa(orderArray) {
//   switch(orderArray[0]){
//     case "masala":
//         return "Making masala Dosa";
//         break;
//          case "plain":
//         return "Making plain Dosa";
//         break;
//          case "Rava":
//         return "Making rava Dosa";
//         break;
//   }
// }
// console.log(prepareDosa(["Rava", "Sambar"]));
// console.log(prepareDosa(["plain", "Sambar"]));

//10 ANS
// function checkAutoMeter(errorCode) {
//   switch(errorCode){
//     case "E1":
//         return "Meter Kharb";
//         break;
//     case "E2":
//         return "Battery Low";
//         break;
//   }
// }
// console.log(checkAutoMeter("E1"));

// Module 3: The Quick Decisions (`Ternary Operator ? :`)
//1ANS
// function getsSukhiPuri(puriEaten) {
//   return puriEaten > 5 ? true: false
// }
// console.log(getsSukhiPuri(6));//true
// console.log(getsSukhiPuri(4));//false

//2 ANS
// function checkSamosaTemp(isHot) {
//   return isHot === true ? "Garam hai" : "Thanda hai"
// }
// console.log(checkSamosaTemp(true));
// console.log(checkSamosaTemp(false));

//3ANS
// function  getChaiOrder(budget){
//     return budget >= 15? "chai + parle-G" : "Sirf chai"
// }
// console.log(getChaiOrder(10));
// console.log(getChaiOrder(15));

//4ANS
// function checkCreditLimit(currentUdhaar) {
//   return currentUdhaar < 500 ? "Samaan le lo" :"Pehle purana hisaab karo"
// }
// console.log(checkCreditLimit(600));
// console.log(checkCreditLimit(300));

//5 ANS
// function getDeliveryFee(distance) {
//   return distance >= 2 ? 20 : 0
// }
// console.log(getDeliveryFee(1.5));// 0
// console.log(getDeliveryFee(3));//20

//6 ANS
// function manageThela(weatherObj) {
// //   { isRaining: true }
//   return weatherObj.isRaining === true ? "Cover lagao" : "Khula rakho"
// }
// console.log(manageThela({isRaining : false}));
// console.log(manageThela({isRaining : true}));

//7ANS
// function sabjiQualityCheck(freshnessScale) {
//   return freshnessScale >= 8 ? "Sale": "Throw"
// }
// console.log(sabjiQualityCheck(9));
// console.log(sabjiQualityCheck(5));

//8ANS
// function getMomosPrice(isVeg) {
//   return isVeg === true ? 40 : 60
// }
// console.log(getMomosPrice(true));
// console.log(getMomosPrice(false));

// Module 4: Mixed Logic & Intermediate Hurdlesconsole.log(checkShopStatus("sunday"));

//1  ANS
// function completeOrder(orderItems) {
//    if(orderItems.includes("panipuri") === true){
//     orderItems.push("sukhipuri")
//     return orderItems
//    }else{
//     return orderItems
//    }
// }
// console.log(completeOrder(["panipuri","Dahipuri"]));
// console.log(completeOrder(["Dahipuri"]));
// console.log(completeOrder(["Dahipuri", "Dahipapadi"]));

//2ANS
// function checkItemPrice(item) {
//   if(item.price === 0 ||  item.price === undefined){
//         return "Price Not set"
//   }else{
//        return "Available"
//   }
// }

// console.log(checkItemPrice({name : "dal"}));
// console.log(checkItemPrice({name : "Rice", price: 50}));
// console.log(checkItemPrice({name : "Rice", price: 0}));


//3ANS
// function autoAvailability(autoObj) {
//   switch(autoObj.status){
//     case "Booked":
//         return "Busy";
//         break;
//         case "free":
//         return "Baitho";
//         break;
//         case "lunch":
//         return "khana kha rha hu";
//         break;
//   }
// }
// console.log(autoAvailability({status: "free"}));
// console.log(autoAvailability({status: "lunch"}));

//4ANS
// function checkComboOffer(samosaQty, orderArray) {
//   if(samosaQty >= 5 && orderArray.includes("jalebi") === true){
//     return "Combo Discount";
//   }else{
//     return "No Discount"
//   }
// }
// console.log(checkComboOffer(6,["samose","jalebi"]));
// console.log(checkComboOffer(6, ["Samose", "Kachori"]));

//5ANS
// function serveGroup(peopleArray) {
//   return peopleArray.length >= 5  ? "Ketli de do" : "Glass dena" ;
// }
// console.log(serveGroup(["A","B"]));
// console.log(serveGroup(["A", "B", "C", "D", "E", "F"]));

//6 ANS
// function price(customer,originalPrice){
//     if(customer.isLocal === true){
//         return originalPrice - 10
//     }else{
//         return originalPrice
//     }
// }
// console.log(price({isLocal : true},100));
// console.log(price({isLocal : false},100));

//7ANS
// function makeKhataEntry(customerName) {
//     return customerName === "" ? "naam btao" : "Entery Done"
// }
// console.log(makeKhataEntry(""));
// console.log(makeKhataEntry("Mohit"));

//8ANS
// function getBiryaniBill(orderObj) {
//     if (orderObj.type === "chicken") {
//         switch (orderObj.portion) {
//             case "full":
//                 return 150;
//                 break;
//             case "half":
//                 return 80;
//                 break;
//         }
//     }else{
//         return 0
//     }
// }
// console.log(getBiryaniBill({ type: "chicken", portion: "full" }));
// console.log(getBiryaniBill({ type: "veg", portion: "half" }));
// console.log(getBiryaniBill({ type: "chicken", portion: "half" }));

//10ANS
// function checkWeekendOffer(day, amount) {
//   if(day === "Saturday" || day === "Sunday" && amount >= 200){
//    return "Free Cola"
//   }else{
//     return "No Offer"
//   }
// }
// console.log(checkWeekendOffer("Saturday" , 250));
// console.log(checkWeekendOffer("Monday", 300));
// console.log(checkWeekendOffer("Sunday",150));



// **Scenario:** Dosa order complete hone par bill receipt object banana hai. Agar order `isParcel` true hai toh packaging fee 10 Rs extra judti hai.

// **Requirements:** Ek function banayein jo ek object return kare. Object ki `total` key par ternary operator lagayein (`basePrice` + 10 ya sirf `basePrice`).
function generateDosaBill(basePrice, isParcel) {
   {basePrice }
  return isParcel === true ? billAmount.basePrice+10 :billAmount.basePrice
//   return {
//     billAmount: /* Ternary magic here */
//   };
}
console.log(generateDosaBill(50, true));

// - `generateDosaBill(50, true)` -> Expected: `{ billAmount: 60 }`
// - `generateDosaBill(50, false)` -> Expected: `{ billAmount: 50 }`