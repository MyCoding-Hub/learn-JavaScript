//String Template
//`${name}` it's for variable
//`${functionName()}` it's for function

let name = "Lorel"
console.log('Hello, ' + name)

console.log(`Hello, ${name}`) // Here, the both lines are returning the same output.

let fullName = ( firstName, lastName) => {
    return `${firstName} ${lastName}`
}

let result = fullName('Tony','Stark')

console.log(result)
