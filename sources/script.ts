const firstJoke:HTMLElement = <HTMLElement>document.getElementById("firstJoke");
const nextJokeButton = document.getElementById("nextJoke");


nextJokeButton?.addEventListener('click', nextJoke);
window.addEventListener('load', (event) => {
    nextJoke();
});

function nextJoke (){
    const options = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com/", options)
    .then(res => res.json())    
    .then(data => {
        firstJoke.textContent = data.joke;
        console.log(data.joke);
    })        
}







