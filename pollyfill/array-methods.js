console.log("Pollyfill")

const arr = [2,3,4,5,6]
const result = arr.reduce((acc,current,index,oarray)=>{

     return acc + current
})

// Array.prototype.myMap = function(cb){
//     const myarray = this
//     const myResult = []
//     for(let i =0;i<myarray.length;i++){
//         myResult.push(cb(myarray[i],i,myarray))
//     }

//     return myResult
// }

// Array.prototype.myFilter = function(cb){
//     const myarray = this
//     const myResult = []
//     for(let i =0;i<myarray.length;i++){
//         if(cb(myarray[i],i,myarray)){
//             myResult.push(myarray[i])
//         }
//     }

//     return myResult
// }

Array.prototype.myReduce = function(cb,initValue){
    const myarray = this
    let accum = initValue
    for(let i =0;i<myarray.length;i++){
        accum = accum !== undefined ? cb(accum,myarray[i],i,myarray) : myarray[0]
    }

    return accum
}

const result2 = arr.myReduce((acc,current,index,oarray)=>{
     return acc + current
})


console.log(result,result2)