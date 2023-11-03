declare const firstJoke: HTMLElement;
declare const nextJokeButton: HTMLElement | null;
declare const weather: HTMLElement;
interface NewJoke {
    joke: string;
    score: number;
    date: string;
}
declare const reportJokes: NewJoke[];
declare const scoreButtons: NodeListOf<Element>;
declare function nextJoke(): void;
declare function getWeather(): void;
