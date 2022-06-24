// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
// const person = {
//   name: "harshit",
//   age: 22,
//   hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);

// // how to access data from objects 
// console.log(person.name);
// console.log(person.age);
// // console.log(person["name"]);
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// person["person"] = "male";
// console.log(person);
//------------------------------------------------\
// access data using loop
const emp ={
  Ename :"mrinal",
  Eage : 24,
  hobbie : ["guitar", "sleeping", "listening music"]
}
for(let key in emp)//for in loop
{
  console.log(key);
   //output------>
                  // Ename 
                   //Eage
                   //hobbie
                   // but i want its data i mean waht is the name of employee 

}
// lets see 
console.log("---------------------------------------------------");

const emp1 ={
  Ename1 :"mrinal",
  Eage1 : 24,
  "hobbie1" : ["guitar", "sleeping", "listening music"]
}
// for(let key1 in emp1)//for in loop
// {
//   console.log(emp1[key1]);
//   console.log("------------------------------------------------");
//   console.log(key1 ,":", emp1[key1]);
// }
for( let key1 of Object.key1(emp1)){
  console.log(emp1[key1]);
}