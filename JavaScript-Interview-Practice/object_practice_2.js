

const person={

    firstName:'arjun',
    lastName:'n'
}
console.log(person.firstName)
console.log(person['lastName'])

//Objects Methods
console.log(Object.keys(person))
console.log(Object.values(person))

// if calling a prop returns undefined, then prop is not present in obj

console.log(person.city)// undefined

console.log(Object.keys(person).includes('city'))// false
console.log(Object.keys(person).includes('firstName')) // true
console.log(Object.keys(person).indexOf('firstName')>=0) // true
console.log(Object.keys(person).indexOf('lastName')) //1

console.log(person.hasOwnProperty('lastName')) // true

// determine total k:v pairs in object 
console.log(Object.keys(person).length)

console.log(person)

console.log(Array.isArray(person)) // false

// add a new key: value pair in object
person.city='bangalore'
console.log(person)

// update an existing key : value pair 
person.lastName='nagrajan'
console.log(person)

// delete a key : value
delete person.city
console.log(person)


