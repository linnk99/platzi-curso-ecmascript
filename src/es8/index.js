// entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

// padding
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-----'))

// async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    const hello2 = await 'Hola mundo'
    console.log(hello, hello2)
}

helloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch(error) {
        console.log(error)
    }
}

anotherFunction()