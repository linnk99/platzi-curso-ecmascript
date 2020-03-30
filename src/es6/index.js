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

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)