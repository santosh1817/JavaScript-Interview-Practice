// es 6 

var person= {
    name:'Arjun',
    city:'Bnglr',
    country:'India',
    bio:'some bio'
}

console.log(person.name) // es 5 
const {name,city,country,bio}=person
console.log(name,city,country,bio) //es 6
const {name:firstName}=person
console.log(firstName)  // changing name variable to firstName
