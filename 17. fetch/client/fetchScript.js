const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const jokeInput = document.getElementById("jokeInput");
const jokeList = document.getElementById("jokeList");

async function makeHttpRequest(route, method, data = null) {
    const options = {
        method
    }
    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(`http://localhost:5000${route}`, options)
        if (response.status >= 400) { //!response.ok
            throw new Error("Newtwork reponse was not ok")
        }
        return await response.json()
    } catch (err) {
        throw err
    }



}


const getJokes = async () => {
    try {
        const result = await makeHttpRequest('/jokes', "GET")
        console.log(result)
        updateJokeList(result.data)
    } catch (err) {
        alert("Something went wrong")
    }

};

const postJoke = async () => {
    try {
        const result = await makeHttpRequest('/jokes-post', "POST", { joke: jokeInput.value })
        console.log(result)
        updateJokeList(result.data)
    } catch (err) {
        alert("Something went wrong")
    }finally{
        jokeInput.value = ""
    }

};

const deleteJoke = async (id) => {
    try {
        const result = await makeHttpRequest(`/jokes/${id}`, "DELETE")
        console.log(result)
        updateJokeList(result.data)
        console.log("Successfully Deleted")
    } catch (err) {
        alert("Something went wrong")
    }
};



const updateJokeList = (jokes) => {
    const jokeListHTML = jokes.map((item, index) => {
        return `
           <li>${item.joke}
            <button class="deleteButton" onclick="deleteJoke(${item.id})">x</button>
           </li>
        `
    }).join('');
    jokeList.innerHTML = jokeListHTML;
};



getButton.addEventListener("click", getJokes);
postButton.addEventListener("click", postJoke);
