// falsy value 
//------------->
          // false 
          // ""
          // null
          // undefined
          // 0
      let firstname ="";
      if (firstname)// false or zero value , so else block will be executed 
      {
        console.log(firstname);

      }
      else{
        console.log(" first name is kind of empty");
      }