"use strict";
const firstJoke = document.getElementById("firstJoke");
const nextJokeButton = document.getElementById("nextJoke");
const weather = document.getElementById("weather");
const reportJokes = [];
const scoreButtons = document.querySelectorAll(".score-button");
window.addEventListener('load', (event) => {
    nextJoke();
    getWeather();
});
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', nextJoke);
scoreButtons.forEach(button => {
    button.addEventListener('click', event => {
        const target = event.target;
        if (target && target instanceof HTMLElement) {
            const selectedScore = parseInt(target.dataset.score || '0');
            const currentJoke = reportJokes[reportJokes.length - 1];
            currentJoke.score = selectedScore;
            console.log(`Joke score: ${selectedScore}`);
        }
        console.log(reportJokes);
    });
});
function nextJoke() {
    const options = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch("https://icanhazdadjoke.com/", options)
        .then(res => res.json())
        .then((data) => {
        const newJoke = {
            joke: data.joke,
            score: 0,
            date: new Date().toISOString()
        };
        reportJokes.push(newJoke);
        console.log(newJoke);
        firstJoke.textContent = data.joke;
    });
}
function getWeather() {
    const options = {
        headers: {
            Accept: "application/json",
            'X-RapidAPI-Key': '7304a4eacdmsh2831e7759479451p1781b7jsn21e0b0059415',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=41.38879%2C2.15899', options)
        .then(res => res.json())
        .then(data => {
        weather.textContent = `${data.current.temp_c}ºC ${data.current.condition.text}`;
    });
}
//# sourceMappingURL=script.js.map