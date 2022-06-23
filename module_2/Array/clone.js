// how to clone array

// how to concatenate two arrays

// let arr1 = ['item1', 'item2'];
// let arr2 = arr1;

// console.log(arr1 === arr2);
// let arr1 = ['item1', 'item2'];
// //let arr2 = ['item1', 'item2'];--> this way of clone is too much time tacken for long size array


// arr1.push('item3');
// // clone using slice() method 
// let arr2 = arr1.slice(0);


// console.log(arr1 === arr2);
// console.log(arr1);
// console.log(arr2);

let arr1 = ['item1', 'item2'];
// we have anothe method for clone any array using concat() method 
let arr2 = [].concat(arr1);

console.log(arr1);
 console.log(arr2);
console.log("-------------------------------");
 // new way for clone 
 let arr3 = [...arr1]// that three dot add all element in new arr2 and make clone of 1st array
 console.log(arr1);
 console.log(arr3);
