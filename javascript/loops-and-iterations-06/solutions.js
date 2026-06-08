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

// for loop se array traverse karein. Ek maxSpeed variable maintain karein aur usko update karte rahein.

function getTopSpeed(speedRecords) {
  // TODO: Find and return the maximum number in the array
//   return speedRecords.length
//   let maximum 
 for(let i = 0; i<speedRecords.length; i++){
  speedRecords = Math.min(speedRecords)
 }
   return speedRecords
 }

console.log(getTopSpeed([80,120,160,90]));
console.log(getTopSpeed([50,50,50]));
console.log(getTopSpeed([]));

// - getTopSpeed([80, 120, 160, 90]) -> Expected: 160
// - getTopSpeed([50, 50, 50]) -> Expected: 50
// - getTopSpeed([]) -> Expected: 0 (Handle empty array)




// Module 2: The Conditionals (while & do...while)


// Module 3: Control Flow (break & continue)


// Module 4: Iterating Objects (for...in Loop)


// Module 5: Iterating Collections (for...of Loop)