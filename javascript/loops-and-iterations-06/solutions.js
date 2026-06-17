// Module 1: The Classic for Loop (Counting & Arrays)

//1ANS
// function calculateTotalRuns(runsArray) {
//     let total = 0;
//     for(let i = 0; i<runsArray.length; i++){
//        total += runsArray[i]   
//     }
//     return total
//     }
// console.log((calculateTotalRuns([4,6,2,0,1])));
// console.log(calculateTotalRuns([0,0,0]));
// console.log(calculateTotalRuns([]));

//2ANS
// function generateTable(num) {
//    let table = []
//   for(let i = 1; i<=10; i++){
//     table.push(i*num)
//   }
//   return table
// }
// console.log(generateTable(2));
// console.log(generateTable(5));
// console.log(generateTable(0));

//3ANS
// function getMedicineDays(totalDays) {
//   let update = []
//   for(let i = 0; i<totalDays; i++){
//     update.push(i+=1)
//   }
//   return update
// }
// console.log(getMedicineDays(5));
// console.log(getMedicineDays(8));
// console.log(getMedicineDays(1));

//4ANS
// function getTopSpeed(speedRecords) {
//     let maxSpeed = 0
//  for(let i = 0; i<speedRecords.length; i++){
//   maxSpeed = Math.max(...speedRecords)
//  }
//    return maxSpeed
//  }

// console.log(getTopSpeed([80,120,160,90]));
// console.log(getTopSpeed([50,50,50]));
// console.log(getTopSpeed([]));


//6ANS
// function countParleG(inventory) {
//   let total = 0
//   for(let i = 0; i<inventory.length; i++){
//     if(inventory[i] === "Parle-G"){
//       total++
//     }
//   }
//   return total
// }
// console.log(countParleG(["Oreo", "Parle-G", "Monaco", "Parle-G"]));
// console.log(countParleG(["GoodDay","Oreo"]));
// console.log(countParleG(["parle-g"]));


//7ANS
// function getEligibleViewers(ages) {
//   let update = []
//   for(let i = 0; i<ages.length; i++){
//     if(ages[i] >= 18){
//     update.push(ages[i])
//     }
//   }
//   return update
// }
// console.log(getEligibleViewers([12,18,25,16]));
// console.log(getEligibleViewers([10,15]));
// console.log(getEligibleViewers([20,30]));

//10ANS
// function getFirstEven(numbers) {
//   let a = 0
//   for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] % 2 ==0){
//         return a = numbers[i]
//     }
//   }  
//   return -1
// }
// console.log(getFirstEven([1,3,4,7,8]));
// console.log(getFirstEven([1, 3, 5]));
// console.log(getFirstEven([2, 4, 6]));

// Module 2: The Conditionals (while & do...while)
//2ANS
// function checkATM(pinsEntered) {
//   const correctPin = "1234";
//   let i = 0;
//   while(i<pinsEntered.length){
//     if(correctPin === pinsEntered[i]){
//         return "Success"
//     }
//      i++
//   }
//   return "Blocked"
// }
// console.log(checkATM(["1111", "2222", "1234", "9999"]));
// console.log(checkATM(["1111", "2222", "3333"]));
// console.log(checkATM(["1234"]));

//3ANS
// function makeLaddoos(demand) {
//     let i = 0;
//     do{
//         i++
//     }while(i<demand)
//         return i
// }
// console.log(makeLaddoos(3));
// console.log(makeLaddoos(0));
// console.log(makeLaddoos(-5));

//4ANS
// function monthsToClearLoan(balance, emiAmount) {
//   let month = 0
// while (balance>0){
//     balance-=emiAmount
//     month ++
// }
//   return month
// }
// console.log(monthsToClearLoan(10000,2000));
// console.log(monthsToClearLoan(5000,1500));
// console.log(monthsToClearLoan(0,1000));


//5ANS
// function launchCountdown(timer) {
//   let up = []
//   while (timer>0){
//     up.push(timer)
//     timer--
//   }
//   up.push("liftoff!")
//    return up
// }
// console.log(launchCountdown(3));
// console.log(launchCountdown(1));
// console.log(launchCountdown(0));


//8ANS
// function getTensCoins(amount) {
//   let count = 0
//   while(amount>=10){
//     count++
//     amount-=10
//   }
//   return count
// }
// console.log(getTensCoins(45));
// console.log(getTensCoins(9));
// console.log(getTensCoins(100));



// Module 3: Control Flow (break & continue)

//1ANS
// function getNormalQueue(queue) {
//   let enteries = [];
//   for (let i = 0; i< queue.length; i++) {
//     if (queue[i] === "VIP") {
//         continue
//     }
//     enteries.push(queue[i])
//   }
//   return enteries
// }
// console.log(getNormalQueue(["Normal", "VIP", "Normal"]));
// console.log(getNormalQueue(["VIP", "VIP"]));
// console.log(getNormalQueue(["Normal"]));

//2ANS
// function countSignalsCrossed(signals) {
//   let count = 0;
//   for(let i = 0; i<signals.length; i++){
//     if(signals[i] === "Red"){
//         break
//     }
//     count++
//   }
//   return count
// }
// console.log(countSignalsCrossed(["Green", "Yellow", "Red","Green"]));
// console.log(countSignalsCrossed(["Red","Green"]));
// console.log(countSignalsCrossed(["Green"]));


//4ANS
// function getVegPlate(buffetItems) {
//   let update = []
//   for(let i = 0; i<buffetItems.length; i++){
//     if(buffetItems[i] === "Non-Veg"){
//         continue
//     }
//     update.push(buffetItems[i])
//   }
//   return update
// }
// console.log(getVegPlate(["Paneer","Non-Veg", "Dal"]));
// console.log(getVegPlate(["Non-Veg"]));
// console.log(getVegPlate(["Roti","Rice"]));

//6ANS
// function billValidItems(prices) {
//   let sum = 0;
//   for(let i = 0; i<prices.length; i++){
//     if(prices[i] === "OOS"){
//         continue
//     }
//     sum += prices[i]
//   }
//   return sum
// }
// console.log(billValidItems([100,"OOS",50]));
// console.log(billValidItems(["OOS","OOS"]));
// console.log(billValidItems([10,20]));


//7ANS
// function countTollCrossings(queue) {
//   let sum = 0
//   for(let i = 0; i<queue.length; i++){
//     if(queue[i]=== "Invalid"){
//         continue
//     }else if(queue[i] === "Police"){
//         break
//     }
//     sum += 1
//   }
//   return sum
// }
// console.log(countTollCrossings(["Valid", "Invalid","Valid"]));
// console.log(countTollCrossings(["Valid","Police","Valid"]));
// console.log((countTollCrossings(["Invalid", "Police"])));


//9ANS
// function removeVowels(message) {
//   let element 
//   let finalOutput = "" 
//    for (let index = 0; index <message.length; index++) {
//     if(message[index] === "a" || message[index] === "e" || message[index] === "i" || message[index] === "o" || message[index] === "u"){
//       continue
//     }
//   element = message[index];
//   finalOutput += element;

// }
// return finalOutput
// }
// console.log(removeVowels("Hello"));
// console.log(removeVowels("Javascript"));
// console.log(removeVowels("Apple"));

// Module 4: Iterating Objects (for...in Loop)

//1ANS
// function getTotalMarks(reportCard) {
//   let marks = 0
//   for(let key in reportCard){
//     marks += reportCard[key]
//   }
//   return marks
// }
// console.log(getTotalMarks({ math: 80, science: 90 }) );
// console.log(getTotalMarks({ hindi: 50 }));
// console.log(getTotalMarks({}));


//2ANS
// function countSpecs(laptopObj) {
//   let count = 0
//   let keys = Object.keys(laptopObj)
//   for(let x in keys){
//     count = x
//     count++
//   }
//   return count
// }
// console.log(countSpecs({ ram: "16GB", cpu: "i7", os: "Windows" }) );
// console.log(countSpecs({ brand: "Apple" }));
// console.log(countSpecs({}));


//3ANS
// function applyDiwaliDiscount(cartObj) {
//   for(let key in cartObj){
//     if(cartObj[key] >= 50){
//     cartObj[key] = cartObj[key] - 50
//     } 
//   }
//   return cartObj
// }
// console.log(applyDiwaliDiscount({ shirt: 500, pant: 800 }) );
// console.log(applyDiwaliDiscount({ cap: 100 }));
// console.log(applyDiwaliDiscount({}));

//4ANS
// function checkPassFail(marksObj) {
//   for(let key in marksObj){
//     if(marksObj[key]<33){
//         return "Fail"
//     }
//   }
//   return "Pass"
// }
// console.log(checkPassFail({math : 40, science: 30}));
// console.log(checkPassFail({math: 80, english: 70}));
// console.log(checkPassFail({}));


//5ANS
// function getMaxPrice(pricesObj) {
//   let max = 0
//   for(let key in pricesObj){
//     if(max<pricesObj[key])
//         max = pricesObj[key]
//   }
//   return max
// }
// console.log(getMaxPrice({Tv:20000, Fridge:15000, Ac:25000}));
// console.log(getMaxPrice({bulb : 100}));
// console.log(getMaxPrice({}));


//7ANS
// function getCustomKeys(obj) {
//     let ar = []
//     for (let key in obj) {
//         ar.push(key)
//     }
//     return ar
// }
// console.log(getCustomKeys({ a: 1, b: 2 }));
// console.log(getCustomKeys({name: "Raj"}));
// console.log(getCustomKeys({}));


// Module 5: Iterating Collections (for...of Loop)
