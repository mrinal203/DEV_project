// //Object inside array
// create usear name objet and store informatation 
const user = [
   {userId :1 , FirstName : "mrinal",Gender: "M"},
   {userId :2, FirstName : "sukla",Gender: "M"},
   {userId :3 , FirstName : "mohiit",Gender: "M"},
   {userId :4 , FirstName : "ganesh",Gender: "M"},
   {userId :5 , FirstName : "rohit",Gender: "M"},
]

// now we have to print the value of user 
// we shoud use loop of type "for of " loop
for (let i of user){
  console.log(i);
}

//--------------output
// PS D:\DEV_project\module_2> node "d:\DEV_project\module_2\Array\Object\Object inside array.JS"

// { userId: 1, FirstName: 'mrinal', Gender: 'M' }
// { userId: 2, FirstName: 'sukla', Gender: 'M' }
// { userId: 3, FirstName: 'mohiit', Gender: 'M' }
// { userId: 4, FirstName: 'ganesh', Gender: 'M' }
// { userId: 5, FirstName: 'rohit', Gender: 'M' }

// PS D:\DEV_project\module_2> 

//--------------------------------------------------------------------------------------------
//if you wand print only some specific item of objects the 
for( let j of user){
  console.log(j.FirstName);
}
//--------------------------------------------------------------------------------------------
//if you wand print only some specific item of objects the 
for( let k of user){
  console.log(k.Gender);
}
//--------------------------------------------------------------------------------------------
//if you wand print only some specific item of objects the 
for( let l of user){
  console.log(l.userId);
}

// output
//mrinal
// sukla
// mohiit
// ganesh
// rohit
// M
// M
// M
// M
// M
// 1
// 2
// 3
// 4
// 5