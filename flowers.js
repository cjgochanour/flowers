const flowers = [
    {
        id:1,
        color:"White",
        species:"White Rose",
        price:0.9
    },
    {
        id:2,
        color:"Red",
        species:"Red Tulip",
        price:1.1
    },
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const lastFlower = flowers[lastIndex]
    const maxID = lastFlower.id
    const newID = maxID + 1
  
    flowerObject.id = newID
    flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers){
        if (flower.price > 1){
             expensiveFlowers.push(flower)
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

