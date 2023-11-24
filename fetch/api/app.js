const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors());

let jokes = [
    { id: 1, joke: 'Learn programming to understand programming jokes.' },
    { id: 2, joke: 'Code never lies, comments sometimes do.' },
    { id: 3, joke: 'You are semicolons to my Statements' },
    { id: 4, joke: 'Programming is 1% writing code and 99% understanding why it\'s not working' },
    { id: 5, joke: 'I told him I could not open a jar. He told me to download Java' },
    { id: 6, joke: 'Comparing Java and JavaScript is the same as comparing a car and carpet' },
    { id: 7, joke: 'Golden rule of programming - If it works, don\'t touch it.' }
];



app.get('/jokes', (req, res) => {
    res.status(200).json({ data: jokes }); // 200 OK
});



app.post('/jokes-post', (req, res) => {
    if (!req.body.joke) {
        res.status(400).json({ error: 'Bad Request - Please provide a joke in the request body' }); // 400 Bad Request
    } else {
        jokes.push({id:Date.now(),joke:req.body.joke});
        res.status(201).json({ data: jokes }); // 201 Created
    }
});

app.get('/test',(req,res)=>{
    res.status(401).json({error:"bad request bro"})
})

app.delete('/jokes/:id', (req, res) => {
    const id = req.params.id;
    const idExists = jokes.some(jokeObj => jokeObj.id == id);
    if (!idExists) {
        res.status(404).json({ error: 'Not Found - Joke ID not found' }); // 404 Not Found
    } else {
        const filteredJokes = jokes.filter((item, index) => item.id != id);
        jokes = filteredJokes;
        res.status(200).json({ data: jokes });
    }
});


app.listen(5000,()=>{
    console.log("server running on 5000")
})