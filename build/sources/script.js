"use strict";
const firstJoke = document.getElementById("firstJoke");
const nextJokeButton = document.getElementById("nextJoke");
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', nextJoke);
window.addEventListener('load', function (event) {
    nextJoke();
});
function nextJoke() {
    const options = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch("https://icanhazdadjoke.com/", options)
        .then(res => res.json())
        .then(data => {
        firstJoke.textContent = data.joke;
        console.log(data.joke);
    });
}
//# sourceMappingURL=script.js.map