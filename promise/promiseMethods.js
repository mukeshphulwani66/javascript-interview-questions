
function getSquare(n, delay) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (n % 2 == 0) res(n * n)
            else rej("cant calculate sqaure for odd numbers")
        }, delay)
    })
    return promise
}

async function getData() {
    // 1
    // race - will return first promse whether its resolved or rejected
    // any -  will return first promise only when its resolved
    try {
        const res = await Promise
        .any([getSquare(5, 2000), getSquare(3, 1000)])
        console.log(res)
    } catch (err) {
        console.log("ERROR",err)
        console.log(err.errors)
    }

}

getData()