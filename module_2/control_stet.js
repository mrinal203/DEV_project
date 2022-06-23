let age =19;
if (age > 18)// if this conditin is true then it will return true and then execute their block of code 
{
  console.log(" User can play game ");
}else {
  console.log(" user can't play this game");
}
//--------------------------------------------
// ternary operator 
let age1 =8;
let drink;

if (age1>= 5){
  drink = "coffee";
}
else {
  drink ="milk";
}
console.log(drink);
console.log("-------------------------");
// no need to write long code 
// use ternary opt
let ag=8;
let drink1 = ag>=5 ? " coffee":"milk";
console.log(drink1);
// for loop
let total =0;
let num=5;
for(let i=0; i<=num; i++){
  total = total+i;
}
console.log(total);

// all loop work same like c++ 