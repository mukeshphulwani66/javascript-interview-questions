console.log("infinite currying..")
// multiply(2)(3)(4)(5)(3)(3)()
// multiply(2)(3)(4)

function multiply(a){
    return function(b){
       if(b) return multiply(a*b)
       return a
    }
}

console.log(multiply(2)(3)(2)())