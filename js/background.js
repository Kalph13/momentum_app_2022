const images = [
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg"
]

const background = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];

background.id = "background";
background.src = `./img/${chosenImage}`;
document.body.appendChild(background);