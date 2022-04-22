const images = [
    "Background_1.jpg",
    "Background_2.jpg",
    "Background_3.jpg"
]

const background = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];

background.id = "background";
background.src = `./img/${chosenImage}`;
document.body.appendChild(background);