// // how to print in java script 
// 05/03/022
// console.log(" hello world");

// // for terminal output --  node intro.js
// let a =10;
// console.log(10);

// let char = 'M';
// console.log(char);

// let str = "i am mrinal "
// console.log(str);

// let bool = true;
// console.log(bool);

// // output-----
// // PS D:\DEV_project\module_2> node intro.js
// //  hello world
// // 10
// // M
// // i am mrinal
// // true

//-----------------------------------------------------------------------------------
let obj ={}
console.log(obj);

let Objmeinal = {

  "Name " : "Mrinal",
  "Age "  : "34",
  "Phone ": 7979757705,
  lastName : 'sauraji'
}
 console.log(Objmeinal);

 let captAmerica = {
   name: "Mrinal",
   Age: 003,
   friends: ['suraj', 'suraj', 'suraj','mj'],
   isAvenger : false,
   address:{
        city :" muzaffarpur",
        state : "bihar"
   },
   sayhii: function () {
    console.log("caption america say Hii")
    
  }
 }
 console.log("__________________________");
 console.log(captAmerica);
 console.log("__________________________");
 console.log(captAmerica.name);
 console.log("__________________________");
 console.log(captAmerica.address);
 console.log("__________________________");
 console.log(captAmerica.address.city);
 console.log("__________________________");
 console.log(captAmerica.Age);
 console.log("__________________________");
 console.log(captAmerica.sayhii);
 console.log("__________________________");
 console.log(captAmerica.friends[3])
captAmerica.sayhii();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(" object before update : " , captAmerica)
//add a new key to object 
captAmerica.movies = ['viking se 1', 'vikings the vilahala'];
console.log (" object after update ", captAmerica);

// delete a key 
  delete captAmerica.movies;

  // update 
  captAmerica .isAvenger = true;
  console.log(captAmerica);