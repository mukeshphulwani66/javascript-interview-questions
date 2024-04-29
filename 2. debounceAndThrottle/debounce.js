/*
In a search bar, you can use debouncing to delay sending an API request until 
the user has finished typing or paused for a moment. 
This prevents excessive requests for each keystroke.
*/


const debounce = (func,delay)=>{
     let decouncing;
      return function(){
       const args = arguments
       const ctx = this
       clearTimeout(decouncing)
       decouncing = setTimeout(()=>func.apply(ctx,args),delay)
      }
}

const callAPI = function (term) {
    console.log("calling api for",term);
};

const debouncedAPI = debounce(callAPI,500)


document.getElementById('search-input').addEventListener('input', function (e) {
    debouncedAPI(e.target.value)
});

