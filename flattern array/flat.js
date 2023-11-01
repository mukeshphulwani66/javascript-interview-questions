// flattenArray
// input = [[1,2],[3,4]]
// output = [1,2,3,4]

const arr =  [[1,2],[3,4]]
const arr2 =  [1, 2, [3, 4, [5, 6]]];

function FalttenArray(arr){
    return arr.reduce((acc,next)=>{
        return acc.concat(Array.isArray(next)? FalttenArray(next) :next)
    },[])

}

console.log(FalttenArray(arr2))

/*
[1, 2, [3, 4, [5, 6]]];
1---
  acc =  [1]
2---
   acc = [1,2]  
3--
   acc = [ 1,2,3,4,5,6]
 */



