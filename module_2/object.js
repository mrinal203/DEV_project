let friends_list = {

  name: 'Mrinal',
  age :24,
  Friends: ['Suraj','MJ KUMAR','SHIVAN CHATURVEDI','ANUGYA SINGH'],
  Address:{
      city : 'Muzaffarpur',
      State :  'Bihar'

  }
}
console.log(friends_list);
console.log(friends_list.name);
console.log(friends_list.Friends);
console.log(friends_list.Address);

// if we want only city
console.log(friends_list.Address.city);
console.log(friends_list.Address.State);