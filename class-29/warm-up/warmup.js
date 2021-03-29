let person = {
  age: 50,
  hair: false,
  pet: {
    name: 'rocky'
  }
}

let spouse = person.get(person, 'spouse.name'); // undefined

let pet = $$.get(person, 'pet.name'); // rocky

let spouseName = 'spouse.name';


var get = function(person, spouseName) {
  required_fields.forEach(function(field){
    if(field in person){
      if((typeof person[field] != 'undefined')){
        console.log(field + ": " + person[field]);
      }else{
        console.log(field + " exists but is undefined");
      }
    }else{
      console.log(field + " doesn't exist in object");
    }
  });
}

console.log(get);