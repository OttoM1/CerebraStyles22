document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas and its context
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define layers of the northern lights
    const layers = [
        { color: "rgba(128, 0, 255, 0.5)", speed: 0.3, amplitude: 150, frequency: 0.01 },
        { color: "rgba(0, 255, 255, 0.4)", speed: 0.4, amplitude: 120, frequency: 0.02 },
        { color: "rgba(75, 0, 130, 0.3)", speed: 0.2, amplitude: 100, frequency: 0.015 }
    ];

    let offset = 0;

    // Function to draw the northern lights
    function drawNorthernLights() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw each layer
        layers.forEach((layer, index) => {
            ctx.beginPath();

            // Create a gradient for smooth transitions
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, layer.color);
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = gradient;

            // Draw a wavy path for the layer
            for (let x = 0; x <= canvas.width; x++) {
                const y =
                    Math.sin(x * layer.frequency + offset * layer.speed) * layer.amplitude +
                    canvas.height / 2 +
                    index * 60; // Stagger layers vertically
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            // Close and fill the shape
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();
        });

        // Increment offset for animation
        offset += 0.05;
        requestAnimationFrame(drawNorthernLights);
    }

    drawNorthernLights();

    // Adjust canvas size dynamically when window resizes
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
