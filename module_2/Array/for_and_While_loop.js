// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);

console.log("-------------------------");
 //-------------------------------------------------------------------------------
// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits)------------> his is most useble loop
//{
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
//-------------------------------------------------------------------------------

    // for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
 //-------------------------------------------------------------------------------
 // for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
//-------------------------------------------------------------------------------

--------------------------------------------------------
