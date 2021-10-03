let howManyObjects = 25
let randomObjectArray = []

// returns a random int in in range
function getRandomRangeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// returns a random String between
function getRandomString() {
    let minLength = 3
    let maxLength = 16
    let randomKey = ""
    for (let i = 0; i <= getRandomRangeInt
    (minLength, maxLength); i++) {
        randomKey += String.fromCharCode(getRandomRangeInt(97, 122))
    }
    return randomKey
}
// returns a random price
function getRandomPrice () {
    let randomPrice = ""
    randomPrice = Math.random()*getRandomRangeInt(1, 999)
    randomPrice =  randomPrice.toFixed(2)
    return Number(randomPrice)
}
// creates a random Object with properties of name, price, currency, adress(is always emtpy)
function createRandomObject() {
    let newObject = {
        name: getRandomString(),
        price: getRandomPrice(),
        currency: "",
        adress: ""
    }
    if (getRandomRangeInt(0,1))
        newObject.currency = "€"
    else
    newObject.currency = "$"
    return newObject
}

// filling randomObjectArray with as many random Objects as set on howManyObjects
for (let i = 0; i < howManyObjects; i++) {
    let randomObject = createRandomObject()
    randomObjectArray.push(randomObject)
    console.log(getRandomPrice % 2);
    if (!getRandomRangeInt(0,12))
        randomObjectArray.push(randomObject)
}

console.log(randomObjectArray)