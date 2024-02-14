//object
//array
//function

//string
//number
//boolean
//bigInt
//symbol
//null
console.log({} === {}) //выдаст false
console.log(1+1)


const car1 = {
    brand: "bmw",
    maxSpeed: 220,
}

const car2 = {...car1}
console.log(car1);
console.log(car2)

const car3 = structuredClone(car2) //глубокая копия, новая фишка
console.log(car3)
