console.log("promises")

/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      const randomNumber = Math.random()
      if(randomNumber < 0.5){
           resolve(randomNumber)
      }else{
           reject("Operation failed")
      }
    },500)   
})


myPromise.then((result)=>{
    console.log("SUCCESS:",result)
}).catch(err=>{ 
    console.log("ERROR:",err) 
}).finally(()=>{
    console.log("this will always run")
})

*/

function getSquare(n) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (n % 2 == 0) res(n * n)
            else rej("cant calculate sqaure for odd numbers")
        }, 1000)
    })
    return promise
}

// function getData() {
//        getSquare(2)
//         .then((result) => {
//             console.log(result)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//        console.log("function called") 

// }

async function getData(){

      const res = await getSquare(2)
      console.log(res)  
      console.log("function called")
}

getData()
