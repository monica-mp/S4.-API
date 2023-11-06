const firstJoke:HTMLElement = <HTMLElement>document.getElementById("firstJoke");
const nextJokeButton = document.getElementById("nextJoke");
const weather:HTMLElement = <HTMLElement>document.getElementById("weather");
const scoreButtons = document.querySelectorAll(".score-button");

const apiUrls = [
    'https://icanhazdadjoke.com/',
    'https://joke110.p.rapidapi.com/random_joke'
];
let useFirstApi = true;

interface NewJoke {
    joke: string,
    score: number,
    date: string
}
const reportJokes: NewJoke[] = [];



//------------------Events------------------
window.addEventListener('load', (event) => {
    nextJoke();
    getWeather();
});

nextJokeButton?.addEventListener('click', nextJoke);

//----Score buttons----
scoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {        
        if (reportJokes.length > 0) {
            let lastJoke = reportJokes[reportJokes.length - 1];
            lastJoke.score = index + 1;
            console.log('Joke score:', lastJoke.score);
            console.log('Array jokes:', reportJokes);
        }
    });
});


//------------------Next Joke------------------
function nextJoke (){
    const apiUrl = apiUrls[useFirstApi ? 0 : 1];
    let options: RequestInit;    
    if (useFirstApi) {
        options = {
            headers: {
                Accept: "application/json",
            }
        };  
            
    } else {        
        options = {
            headers: {
                'X-RapidAPI-Key': '7304a4eacdmsh2831e7759479451p1781b7jsn21e0b0059415',
                'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
                    
            }
        };
    }   

    fetch(apiUrl, options)
    .then(res => res.json())    
    .then((data: { joke: string, setup: string, punchline: string }) => {
        const newJoke: NewJoke = {
            joke: data.joke ? data.joke :`${data.setup}→${data.punchline}`,           
            score: 0,
            date: new Date().toISOString()           
        };
        
        reportJokes.push(newJoke);
        console.log(newJoke);

        firstJoke.textContent = newJoke.joke;
        useFirstApi = !useFirstApi; 
             
    });  
   
}





////------------------E.4 Weather------------------

function getWeather() {
    const options = {
        headers: {
            Accept: "application/json",
            'X-RapidAPI-Key': '7304a4eacdmsh2831e7759479451p1781b7jsn21e0b0059415',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=41.38879%2C2.15899', options)
    .then(res => res.json())    
    .then(data => {          
        if(data.current.condition.text == "Sunny"){
            weather.textContent = `${"☀️"} | ${data.current.temp_c}ºC`;
        }else if(data.current.condition.text == "Partly cloudy"){
            weather.textContent = `${"⛅"} | ${data.current.temp_c}ºC`;
        }else if(data.current.condition.text == "Overcast"){
            weather.textContent = `${"☁️"} | ${data.current.temp_c}ºC`;
        }else if(data.current.condition.text == "Moderate rain"){
            weather.textContent = `${"🌧️"} | ${data.current.temp_c}ºC`;
        }
        
    });    
       
}




