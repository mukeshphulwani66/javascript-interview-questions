/*
function increment() {
    let count = 0
    return function() {
        count = count + 1
        return count
    }
}
const myInc = increment()
console.log(myInc())
console.log(myInc())
console.log(myInc())
*/

// Memoization 

function memoizeSquare() {
    const cache = {}
    return function (n) {
        if (n in cache) {
            console.log("returned from cache")
            return cache[n]
        }
        cache[n] = n * n
        console.log("calculating")
        return cache[n]
    }
}

const memoSquare = memoizeSquare()

console.log(memoSquare(5)) // calculate
console.log(memoSquare(5)) // returns from cache

