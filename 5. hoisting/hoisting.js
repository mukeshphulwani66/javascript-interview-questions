/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
Why hoisting exists ? - Because JS has to allocate memory for variables.
*/

//----1----
// test()
// var test = function(){
//     console.log("hello world")
// }

//----2------
// var x = 10
// function testvalue(){
//     console.log(x)
//     var x = 20
// }
// testvalue()

//-----3------
// function show(){
//     if(false){
//         let p = 20;
//         console.log(p)
//     }
//     console.log(p)
// }
// show()

// ----- 4-----
var pname = 'name 1'
function print(){
    pname = 'name 2'
    if(1==2){
        let pname = "name 3"
    }
}
print()
console.log(pname)








