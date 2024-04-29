console.log("sort")

const prices = [4,20,5,8]
prices.sort((a,b)=>{
    /*
     +ve -> b will come first
     -ve -> a will come first
     0   -> keep the original order of a and b
    */
   return a-b

})
console.log(prices)

const fruits = ["orange","banana","apple"]
fruits.sort()
console.log(fruits)

const words = ["zebra","café", "apple", "éclair"];
words.sort((a,b)=> a.localeCompare(b))
console.log(words)