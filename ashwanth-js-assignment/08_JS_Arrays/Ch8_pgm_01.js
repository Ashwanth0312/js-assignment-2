// Creating arrays

var scores;
var names;
var akaScores;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

// 1) Add an extra element to each array.
scores.push(5);
names.push("Zara");

console.log(scores); // Output: [ 3, 1, 8, 2, 5 ]
console.log(names); // Output: [ "Kandra", "Dax", "Blinky", "Zara" ]

// 2) Declare a third variable, akaScores.
// (already done above)

// 3) Assign the scores array to akaScores.
akaScores = scores;

// 4) Log akaScores to the console.
console.log(akaScores); // Output: [ 3, 1, 8, 2, 5 ]