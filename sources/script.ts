const firstJoke:HTMLElement = <HTMLElement>document.getElementById("firstJoke");
const nextJokeButton = document.getElementById("nextJoke");

interface NewJoke {
    joke: string,
    score: number,
    date: string
}

const reportJokes: NewJoke[] = [];
const scoreButtons = document.querySelectorAll(".score-button");



window.addEventListener('load', (event) => {
    nextJoke();
});

nextJokeButton?.addEventListener('click', nextJoke);

scoreButtons.forEach(button => {
    button.addEventListener('click', event =>{
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


function nextJoke (){
    const options = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com/", options)
    .then(res => res.json())    
    .then((data: {joke: string}) => {
        const newJoke: NewJoke = {
            joke: data.joke,
            score: 0,
            date: new Date().toISOString()            
        };
        reportJokes.push(newJoke);
        console.log(newJoke);

        firstJoke.textContent = data.joke;       
    });   
   
}






