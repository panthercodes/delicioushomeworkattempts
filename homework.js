// Array of Strings
const arrayOfStrings = ['Hello World', 'Diplo', 'Gamestop', 'Patterson', 'Halo'];
// Goal: Create a function that returns the string with the greatest length.

// Thoughts: Iterate/Loop/Check each element's length on arrayOfStrings. Compare each element.length against each other. 
// Push whichever .length is greater to a new array?
// Use a for loop  to check longest string. Start with checking to see if it's bigger than 0 (containts any string at all) then redeclare longest variable?

// Somehow use reduce, math.max, forEach? I don't want to return a new array so I'm not sure how to implement them here. We need to go back over high order functions!

// Attempt #1

// let longestArrayElement = [];

// function testing() {
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         longestArrayElement.push(arrayOfStrings[i].length);
//     }
// };
// testing();

// Was trying to push the longest string to a new array, botched that.


// Atempt #2

let stringLength = 0;
let longestBoi;

function checkStringLength() {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > stringLength) {
            stringLength = arrayOfStrings[i].length;
            longestBoi = arrayOfStrings[i];
        }
    }
}
checkStringLength();
console.log(stringLength);

// Figured I would at least attempt to get it finished. Now just to figure out how to make it a 1 line solution.

// Attempt #3 (After scratch my head I had to give in a look at Stack overflow. Even after reading the reduce documentation I am having trouble understanding it)

const longest2 = arrayOfStrings.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    });

const longest3 = arrayOfStrings.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest3);
