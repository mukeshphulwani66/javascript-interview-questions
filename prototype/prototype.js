console.log("prototype.")
/*
Array.prototype.sum = function(){
    return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}


const arr = [1,2,3,4]
console.log(arr.sum())
*/

Date.prototype.getLastYear = function(){
  return this.getFullYear() - 1
}

const date = new Date()
console.log(date.getFullYear())
console.log(date.getLastYear())

class Animal {
    constructor(name) {
        this.name = name
    }
}
Animal.prototype.eat = function(){
    return `${this.name} is eating`
}
const dog = new Animal("Buddy")
console.log(dog.eat())
