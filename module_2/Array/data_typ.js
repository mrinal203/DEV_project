// Primitive vs reference data types
  let num1=10;
  let num2 =num1;
  console.log(" the value of num1 is ", num1);
  console.log(" the value of num2 is ", num2);
  num1++;
  console.log(" After increment of num1");
  console.log(" the value of num1 is ", num1);
  console.log(" the value of num2 is ", num2);

  // referance type
  // array
  let arr1 =["Mrinal", " surendra"];
  let arr2 = arr1;

  console.log(" array 1 = ", arr1);
  console.log(" array 2 is ", arr2);

  arr1.push("item3");
  console.log(" After pussing in the array::");
  console.log(" array 1 = ", arr1);
  console.log(" array 2 is ", arr2);

  // output
  // array 1 =  [ 'Mrinal', ' surendra' ]
  // array 2 is  [ 'Mrinal', ' surendra' ]
  // After pussing in the array::
  // array 1 =  [ 'Mrinal', ' surendra', 'item3' ]
  // array 2 is  [ 'Mrinal', ' surendra', 'item3' ]