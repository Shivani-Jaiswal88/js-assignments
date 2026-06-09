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



// Module 2: The Conditionals (while & do...while)


// Module 3: Control Flow (break & continue)


// Module 4: Iterating Objects (for...in Loop)


// Module 5: Iterating Collections (for...of Loop)