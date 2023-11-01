console.log("Arrow vs Normal function")

//  arguments object dosen't work with arrow function

function Add() {
    const [a, b] = arguments
    console.log("sum of", a, b, " is", a + b)
}

// arrow function cant not be used as constructors

function Person(name, age) {
    this.name = name
    this.age = age
}

const objPerson = new Person("ramesh", 20)
console.log(objPerson.name)

// this keyword dont works well with arrow function

const obj = {
    name: "mukesh",
    age: 20,
    sayhello: function () {
        const greet = () => {
            console.log(this)
            console.log("Hey There!!")
        }
        greet()
    }

}

obj.sayhello()







