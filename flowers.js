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
    toys.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

