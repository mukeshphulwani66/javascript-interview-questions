/*
Function currying is a functional programming technique in 
which a function is transformed into a sequence of functions, 
each taking a single argument. 
*/
console.log("currying")

// non currying
function add(a,b,c){
    return a+b+c
}
add(1,2,3)

// function currying
function curryAdd(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const curryAddver2 = (a)=>(b)=>(c)=> a+b+c

function DressPrice(price){
    return function(dicountPer){
        return price - (price * dicountPer /100)
    }
}

const calcAmount = DressPrice(100)
//customer - 1
console.log(calcAmount(20))
//special customer
console.log(calcAmount(50))

