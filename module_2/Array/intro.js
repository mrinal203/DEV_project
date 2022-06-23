// orderd collactions of items 
let arr = ["mrinal", "suraj", "raja"," mohanchandra"];
// array indexinng
console.log(arr);// prinal all element
// or 
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
// or using loop
console.log("---------------------------");
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}
// array is a object in Js

// how to chack type of array
console.log(typeof arr);// object
let obj = {};
// in array there are lots of object but how we will understand or know it is array insisde
// let see---> use function "Array.isArray()"
console.log("----------------------------------");
console.log(typeof obj);
console.log("-----------------------------------");
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));