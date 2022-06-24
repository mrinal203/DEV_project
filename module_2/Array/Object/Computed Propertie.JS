// computed propertie 

const key1 = " objkey1";
const key2 = " objkey2";

const val1 = "myvalue1";
const val2 = "myvalue2";
const obj = {
  key1 : val1,
  key2 : val2
}
console.log(obj);
// output---------->
//{ key1: 'myvalue1', key2: 'myvalue2' }
// second way

const obj1 = {};
obj1[key1] = val1;
obj1[key2] = val2;
console.log(obj1);
//output-------->
//{ ' objkey1': 'myvalue1', ' objkey2': 'myvalue2' }
//this is our requried output 

