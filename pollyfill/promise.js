
class MyPromise {
    constructor(executor) {
        this.onSuccess = null
        this.onFailed = null
        this.isFullfilled = false
        this.isRejected = false
        this.isCalled = false
        this.value
        executor(this.resolve.bind(this), this.reject.bind(this))
    }

    static resolve(value){
        return new MyPromise((res,rej)=>{
            res(value)
        })
    }
    static reject(value){
        return new MyPromise((res,rej)=>{
            rej(value)
        })
    }

    then(cb) {
        this.onSuccess = cb
        if (this.isFullfilled && !this.isCalled) {
            this.isCalled = true
            this.onSuccess(this.value)
        }
        return this
    }
    catch(cb) {
        this.onFailed = cb
        if (this.isRejected && !this.isCalled) {
            this.isCalled = true
            this.onFailed(this.value)
        }
        return this
    }

    resolve(successData){
        this.isFullfilled = true
        this.value = successData
        if (typeof this.onSuccess == "function") {
            this.onSuccess(successData)
            this.isCalled = true
        }

    }

    reject(errorMessage){
        this.isRejected = true
        this.value = errorMessage
        if (typeof this.onFailed == "function") {
            this.onFailed(errorMessage)
            this.isCalled = true
        }
    }

}

const myPromise = new MyPromise((res, rej) => {
    setTimeout(()=>{
     res("Good data")
  
    },1000)
})


myPromise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log("error", err)
})


// const promise1 = MyPromise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: 123
// });



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const randomNumber = Math.random()
//       if(randomNumber < 0.5){
//            resolve(randomNumber)
//       }else{
//            reject("Operation failed")
//       }
//     },500)
// })


// myPromise.then((result)=>{7
//     console.log("SUCCESS:",result)
// }).catch(err=>{
//     console.log("ERROR:",err)
// })
