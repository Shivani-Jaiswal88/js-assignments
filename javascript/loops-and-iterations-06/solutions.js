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




// - searchTrunk(["Suit", "Lal Saree", "Jeans"]) -> Expected: ["Suit", "Lal Saree"]
// - searchTrunk(["Shirt", "Pant"]) -> Expected: [] (If not found, trunk becomes empty)
// - searchTrunk(["Lal Saree", "Shirt"]) -> Expected: ["Lal Saree"]

// Module 3: Control Flow (break & continue)


// Module 4: Iterating Objects (for...in Loop)


// Module 5: Iterating Collections (for...of Loop)
