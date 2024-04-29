console.log("Method chaining.")
/*
    calculate().sum(5,10).subtraction(3).add(4).multiply(10).value()  
*/

// const calculate = {
//     value: 0,
//     add(no) {
//         this.value = this.value + no
//         return this
//     },
//     multiply(no) {
//         this.value = this.value * no
//         return this
//     },
//     subtraction(no) {
//         this.value = this.value - no
//         return this
//     },
//     getValue(){
//         return this.value
//     }

// }

// const result = calculate.add(4).multiply(10).subtraction(5).getValue()
// console.log(result)


class Calculator {
    constructor() {
        this.value = 0
    }
    add(no) {
        this.value = this.value + no
        return this
    }
    multiply(no) {
        this.value = this.value * no
        return this
    }
    subtraction(no) {
        this.value = this.value - no
        return this
    }
    getValue() {
        return this.value
    }
}

const calculate = new Calculator()
const result = calculate.add(4).multiply(10).subtraction(5).getValue()
console.log(result)

