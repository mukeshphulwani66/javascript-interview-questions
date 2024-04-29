/*
callback is a function passed as a argument to another function.
callback functions are used when there is an asynchronous process

*/

/*
function getSquare(n, cb) {
    setTimeout(() => {
        cb(n * n)
    }, 1000)
}

getSquare(2, (result) => {
    getSquare(result, (result2) => {
        getSquare(result2, (result3) => {
            console.log(result3)
        })
    })
})

*/

// ioc

function getUserDetail(cb) {
    setTimeout(() => {
        cb({userName:"ramesh",userId:"123"})
        
    }, 1000)
}
function getPosts(userid,cb) {
    setTimeout(() => {
        cb(['post1','post2'])
    }, 1000)
}

getUserDetail((userDetails)=>{
    console.log(userDetails)
    getPosts(userDetails.userId,(posts)=>{
        console.log(posts)
    })
})


