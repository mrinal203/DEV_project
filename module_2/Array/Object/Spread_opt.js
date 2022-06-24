//spread opt
// we have already see this opt in array time ,
//spread opt in case of array 
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// now we will se same opt in case of object 
// const obj1 = {
//   key1 : "value1",
//   key2 : "value2",

// }
// const obj2 = {
//   key3 : "value3",
//   key4 : "value4",
// }
// const newobj = {...obj1,...obj2};
// console.log(newobj);
// same as array
// output-->
// { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
const obj1 = {
  key1 : "value1",
  key2 : "value2",

}
const obj2 = {
  key1 : "mrinal",
  key3 : "value3",
  key4 : "value4",
}
const newobj = {...obj1,...obj2};
// console.log(newobj);//---------output:- { key1: 'mrinal', key2: 'value2', key3: 'value3', key4: 'value4' }
// here you can se clearly key1 = mrinal , bcz we write in obj2 in last (see line 34), bcz in this case it Will 
// consider as only one key1 value bcz they cant accept same name of variable at a same time.
// if we write obj2 first after then obj1 then obj1 of key1 will not accepted .