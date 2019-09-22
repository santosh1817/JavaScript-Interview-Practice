var friends=['raj','rahul','mohan']

console.log(friends.slice(0,1))
console.log(friends.slice(0,1))
console.log(friends.slice(0,1))

// each time same output, hence pure function 

console.log(friends.splice(0,1))
console.log(friends.splice(0,1))
console.log(friends.splice(0,1))

// each time different output, hence not pure function. Also it modifies the existing array.