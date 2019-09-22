var numbers=[10,20,30,40,50]
//es 5 

var n1=numbers[0]
var n2=numbers[1]

//es 6
const [a1,a2]=numbers
console.log(a1,a2)//10 20

 const [b1,,,,b2]=numbers
 console.log(b1,b2)//10 50
 const[,,b3]=numbers
 console.log(b1,b2)//10 50
 console.log(b3) //30
