const quotes = [
    {
        main: "I've had lots of troubles, so I write jolly tales.",
        sub: "  - Louisa May Alcott",
    },
    {
        main: "Chess isn't always competitive. Chess can also be beautiful.",
        sub: "  - Queen's Gambit, Halmon",
    },
    {
        main: "My experience has taught me what you know isn't always what's important.",
        sub: "  - Queen's Gambit, Alma",
    },
    {
        main: "The strongest person is the person who isn't scared to be alone.",
        sub: "  - Queen's Gambit, Alice",
    },
    {
        main: "If you don't like it, You change it.",
        sub: "  - Miss Sloane",
    },
    {
        main: "Suddenly, time travel seems almost unnecessary, because every detail of life is so delightful.",
        sub: "  - About time",
    },
    {
        main: "We are all traveling through ime together, everyday of our lives. all we can do is do our best to relish this remarkable ride.",
        sub: "  - About time",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const number = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[number].main;
author.innerText = quotes[number].sub;