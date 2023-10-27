const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function generateNoise() {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;       // Red
        data[i + 1] = value;   // Green
        data[i + 2] = value;   // Blue
        data[i + 3] = 255;     // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
}

function loop() {
    generateNoise();
    requestAnimationFrame(loop);
}

// Handle resizing the window
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

loop();
