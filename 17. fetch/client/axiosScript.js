const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const jokeInput = document.getElementById("jokeInput");
const jokeList = document.getElementById("jokeList");

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    }
});

axiosClient.interceptors.request.use(function (config) {
     let count = parseInt(localStorage.getItem("apiCount")) || 0
     count = count + 1
     localStorage.setItem('apiCount',count.toString())
    return config;
  });


axiosClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
     if(error.response.status == 401){
        console.log("you must login again")
     }
    return Promise.reject(error);
});


const getJokes = async () => {
    try {
        const result = await axiosClient.get("/test")
        console.log(result)
        updateJokeList(result.data.data)
    } catch (err) {
        alert("something went wrong")
        console.log(err)
    }


};

const postJoke = async () => {
    try {
        const result = await axiosClient.post("/jokes-post", { joke: jokeInput.value })
        console.log(result)
        updateJokeList(result.data.data)
    } catch (err) {
        alert("something went wrong")
        console.log(err)
    }finally{
        jokeInput.value = ""
    }


};

const deleteJoke = async (id) => {
    try {
        const result = await axiosClient.delete(`/jokes/${id}`)
        console.log(result)
        updateJokeList(result.data.data)
    } catch (err) {
        alert("something went wrong")
        console.log(err)
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
