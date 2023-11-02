declare const firstJoke: HTMLElement;
declare const nextJokeButton: HTMLElement | null;
interface NewJoke {
    joke: string;
    score: number;
    date: string;
}
declare const reportJokes: NewJoke[];
declare const scoreButtons: NodeListOf<Element>;
declare function nextJoke(): void;
