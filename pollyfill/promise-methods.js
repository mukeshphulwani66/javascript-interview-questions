function getSquare(n, delay) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (n % 2 == 0) res(n * n)
            else rej("cant calculate sqaure for odd numbers")
        }, delay)
    })
    return promise
}


Promise.myAll = function (listOfPromise) {
    return new Promise((res, rej) => {
        const result = []
        let c = 0
        for (let i = 0; i < listOfPromise.length; i++) {
            Promise.resolve(listOfPromise[i]).then(data => {
                result[i] = data
                c++
                if (c == listOfPromise.length) {
                    res(result)
                }
            }).catch(err=>rej(err))
        }
    })
}

Promise.myAllSettled = function (listOfPromise) {
    return new Promise((res) => {
        const result = []
        let c = 0

        const commonHandler = (index,status,value)=>{
            result[index] = status == "fulfilled"? {status,value} :
            {status,reason:value}

            c++
            if (c == listOfPromise.length) {
                res(result)
            }
        }

        for (let i = 0; i < listOfPromise.length; i++) {
            Promise.resolve(listOfPromise[i]).then(data => {
                commonHandler(i,"fulfilled",data)
            }).catch(err=> commonHandler(i,"rejected",err))
        }
    })
}

Promise.myRace = function (listOfPromise) {
    return new Promise((res, rej) => {
        for (let i = 0; i < listOfPromise.length; i++) {
            Promise.resolve(listOfPromise[i]).then(data => {
               res(data)
            }).catch(err=>rej(err))
        }
    })
}


Promise.myAny = function (listOfPromise) {
    return new Promise((res,rej) => {
        const result = []
        let c = 0

        const handleError = (index,status,value)=>{
            result[index] = {status,value} 
            c++
            if (c == listOfPromise.length) {
                rej(new AggregateError(result))
            }
        }

        for (let i = 0; i < listOfPromise.length; i++) {
            Promise.resolve(listOfPromise[i]).then(data => {
                res(data)
            }).catch(err=> handleError(i,"rejected",err))
        }
    })
}

async function getData() {
    try{
      const result = await Promise.myAny(
        [getSquare(3, 1000), getSquare(1, 3000)]
    )
    console.log(result)   
    }catch(e){
        console.log(e.name); 
        console.log(e.errors); 
    }
   

}

getData()
