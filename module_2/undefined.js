// undefinded
let name 
console.log(typeof name )// undefined 
// if we not assigned any value for any varible then by defult it will be undefinde 

name = "rohit";
console.log( typeof name);// string

// what is null
//null mening nothing 
let myVariable = null;
console.log(typeof myVariable);//object :--> that is a error in js (bug) 
// bigInt:----------
//in js we can store a number with limit 
let NU =123;
console.log(NU.MAX_SAFE_INTEGER);
//FOR big number we will use big int 
let num = BigInt(123);
//or
//let num1=7;