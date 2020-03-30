// default param
function newFunction(name, age, country) {
    var name = name || 'hector'
    var age = age || 30
    var country = country || 'MX'
    console.log(name, age, country)
}

// es6
function newFunction2(name = 'hector', age = 30, country = 'MX') {
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', '23', 'CO')

// concatenation
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// let y const multilinea
let lorem = "Qui conseguatur. Commodi. Ipsum vel duis yet minima \n" + "Otra farase epica en multilinea"
let lorem2 = `Otra frase epica que necesitamos.
Ahora esta la frase en otra linea.
`

console.log(lorem)
console.log(lorem2)

// desestructuracion de objetos
let person = {
    'name': 'hector',
    'age': 30,
    'country': 'MX'
}

console.log(person.name, person.age)

let {  name, age, country  } = person
console.log(name, age, country)

// spread operator
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

var hola = 'hola'

// let scope
{
    var globalVar = 'Global Var'
}

{
    let globalLet = "Globar Let"
}

console.log(globalVar)
console.log(globalLet)

// const as constant values
const a = 'b'
a = 'a'
console.log(a)

// objetos mejorados
let name = 'hector'
let age = 30
// es5
obj = { name: name, age: age}
// es6
obj2 = { name, age}
console.log(obj2)

// arrow functions
const names = [
    { name: 'hector', age: 30 }
    { name: 'yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (ame, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num

// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Oops!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))