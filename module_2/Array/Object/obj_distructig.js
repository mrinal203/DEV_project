// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects,
//  and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, 
//  or items, from an array​ at a time.

// object destructuring 
const band ={
  bandName : "Bihar band",
  famousSong : "bhojpuri haye re hoth lali hay re kajra",
  year : 1997,
  anotherFamous_song : "rat diya bujha ke piya ",
};
let { bandName : var1, famousSong : var2} = band;

console.log( var1 , var2);
console.log('-------------------------------------');
let { bandName , famousSong,...var3} = band;
console.log(var3);

// output------>
// Bihar band bhojpuri haye re hoth lali hay re kajra
// -------------------------------------
// { year: 1997, anotherFamous_song: 'rat diya bujha ke piya ' }
