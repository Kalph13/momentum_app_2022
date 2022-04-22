const images = [
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg"
]

const showImage = () => {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.background = `url('img/${chosenImage})`;
}

window.onload = () => showImage();