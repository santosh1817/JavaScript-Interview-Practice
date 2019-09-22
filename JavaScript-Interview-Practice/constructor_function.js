function Hero(name,level){
    this.name=name
    this.level=level
}

const hero1=new Hero('Bjorn',1)

console.log(hero1)
console.log(Object.getPrototypeOf(hero1))   

const hero2=new Hero('Santosh',2)
console.log(hero2)


