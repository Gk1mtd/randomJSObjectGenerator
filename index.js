let randomObjectArray = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomKey() {
    let randomKey = ""
    for (let i = 0; i <= getRandomInt(3, 9); i++) {
        randomKey += String.fromCharCode(getRandomInt(97, 122))
    }
    return randomKey
}

function getRandomValue () {
    let randomValue = ""
    for (let i = 0; i <= getRandomInt(3, 16); i++) {
        randomValue += String.fromCharCode(getRandomInt(97, 122))
    }
    return randomValue
}

function createRandomObject() {
    let newObject = {}
    let randomKey = getRandomKey()
    let randomValue = getRandomValue()
    newObject[randomKey] = randomValue
    return newObject
}

randomObjectArray.push(createRandomObject())

// console.log(getRandomKey())
// console.log(getRandomValue())
console.log(randomObjectArray)