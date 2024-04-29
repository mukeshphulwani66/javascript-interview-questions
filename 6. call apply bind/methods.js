console.log("Call Apply Bind..")

const per1 = {
    name:"ramesh",
    age:20
}

const per2 = {
    name:"suresh",
    age:22
}

function Introduce(status,salary){
    console.log(`Myself ${this.name}, I am ${this.age} year old and I am ${status} and my salary is ${salary}`)
}

// Introduce.call(per1,"coder",20000)
// Introduce.call(per2,"single",40000)
// Introduce.apply(per1,["coder",20000])
// Introduce.apply(per2,["single",40000])

const sureshIntro = Introduce.bind(per2,"single",40000)
sureshIntro()



