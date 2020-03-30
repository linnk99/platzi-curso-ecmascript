// operador de reposo
const obj = {
    name: 'hector',
    age: 30,
    country: 'MX'
}

let { country, ...all } = obj
console.log(all)

// operador de propagacion
const obj = {
    name: 'hector',
    age: 30
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

// promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finaliza"))

// regex
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)