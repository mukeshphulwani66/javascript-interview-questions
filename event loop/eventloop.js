function A(){
    console.log("A")
}
function B(){
    console.log("B")
}
function C(data){
    console.log(data)
}
function D(){
    console.log("D")
}

A()
// macro task
setTimeout(B,0)
// micro task 
Promise.resolve("C").then(C)
D()
