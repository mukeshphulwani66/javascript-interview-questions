console.log("Event Bubbling")

const card = document.getElementById("card")
const btn = document.getElementById("button")

card.addEventListener("click",(e)=>{
    console.log("clicked on card")
})

btn.addEventListener("click",(e)=>{
    console.log("clicked on button")
    e.stopPropagation()
})

