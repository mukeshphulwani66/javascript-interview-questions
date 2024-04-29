console.log("pollyfill for call apply bind")

const per1 = {
    name:"ramesh",
    age:20

}
const per2 = {
    name:"suresh",
    age:22
}
function Introduce(status,salary,test1,test2){
    console.log(`Myself ${this.name}, I am ${this.age} year old and I am ${status} and my salary is ${salary}`)
    console.log(test1,test2)
}

// Introduce.call(per1,"coder",20000)
// Introduce.call(per2,"single",40000)
// Introduce.apply(per1,["coder",20000])
// Introduce.apply(per2,["single",40000])

// const sureshIntro = Introduce.bind(per2,"single",40000)
// sureshIntro()


Function.prototype.myCall = function(obj,...args){
    const key = Symbol()
    obj[key] = this
    obj[key](...args)
    delete obj[key]
}
Function.prototype.myApply = function(obj,args){
    const key = Symbol()
    obj[key] = this
    obj[key](...args)
    delete obj[key]
}
Function.prototype.myBind = function(obj,...args){
    // const key = Symbol()
    // obj[key] = this
    // return function(...params){
    //     obj[key](...args,...params)
    //     delete obj[key]   
    // }
      const func = this
      return function(...params){
         func.apply(obj,[...args,...params])
    }

}

Introduce.myCall(per1,"coder",20000)
Introduce.myApply(per2,["coder",20000])

const sureshIntro = Introduce.myBind(per2,"single",50000)
sureshIntro("arg1","args2")





