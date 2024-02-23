// console.log("deep clone obj")


const obj1 = {
    a:1,
    b:2,
    c:{
        d:5
    },
    e:new Date(),
    f:undefined
}

/**
 * 
 * copyObj = {
 *   a:1,
 *   b:2,
 *   c:{
        d:5
      }
 * }
 * 
 */
function createDeepClone(obj){
    let copyObj = Array.isArray(obj)?[]:{}

    for(let key in obj){
        const value = obj[key]
        if(value instanceof Date){
            copyObj[key] = new Date(value.getTime())
        }
        else if(typeof value !== "object"){
            copyObj[key] = value
        }else{
            copyObj[key] = createDeepClone(value)
        }
        
    }
    return copyObj
}
const obj2 = createDeepClone(obj1)
const obj3 = structuredClone(obj1)
// const obj2 = JSON.parse(JSON.stringify(obj1))
// obj1.c.d = 6;
console.log(obj1,obj2,obj3)