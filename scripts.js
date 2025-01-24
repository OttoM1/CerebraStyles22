document.addEventListener('DOMContentLoaded', () => {
    // Select sections for fade-in (unchanged)
    const sections = document.querySelectorAll('section');
    const fadeInDuration = 1000;

    sections.forEach((section) => {
        section.classList.add('fade-in-up');
        setTimeout(() => {
            section.classList.add('visible');
        }, fadeInDuration);
    });

    // Setup the wavy canvas
    const canvas = document.getElementById("matrixCanvas"); // Reuse the same canvas element
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let waveAmplitude = 100; // Height of the wave
    let waveFrequency = 0.02; // Controls the number of waves
    let waveSpeed = 0.03; // Speed of the wave
    let offset = 0; // For animating the wave

    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2); // Start at the middle of the canvas

        for (let x = 0; x < canvas.width; x++) {
            const y = Math.sin(x * waveFrequency + offset) * waveAmplitude + canvas.height / 2;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height); // Connect to the bottom-right corner
        ctx.lineTo(0, canvas.height); // Connect to the bottom-left corner
        ctx.closePath();

        // Create gradient
        const gradient = ctx.createLinearGradient(0, canvas.height / 2 - waveAmplitude, 0, canvas.height);
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.7)");
        gradient.addColorStop(1, "rgba(0, 0, 128, 0.7)");

        ctx.fillStyle = gradient;
        ctx.fill();

        offset += waveSpeed; // Move the wave
        requestAnimationFrame(drawWave); // Animate the wave
    }

    drawWave();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
