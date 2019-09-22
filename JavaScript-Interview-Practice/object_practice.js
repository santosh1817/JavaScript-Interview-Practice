const city={
    name:'bangalore',
    minTemp:23.5,
    placesToVisit:['mg road','brigade road'] 
}

const restaurant={
    name:'1947',
    location :['jayanagar','vijaynagar'],
    type:'casual dining',
    rating:4.1,
    cuisines:['North Indian','Chinese'],
    feature:{
        'Home Delivery':true,
        'Veg Only':true,
        'Alcohol':false
    },
    reviews:[
        {
            name :'Suraj',
            createdAt:'25-01-2019',
            body:'fab place',
            rating:5

        },
        {
            name:'Sumanth',
            createdAt:'21-01-2019',
            body:'ok place',
            rating:4
        }
    ]
}
console.log(restaurant.name)
console.log(restaurant['location'])
console.log(restaurant.reviews[1].name)
console.log(restaurant)

