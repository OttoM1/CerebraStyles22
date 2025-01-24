document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('northernLightsCanvas');
    const ctx = canvas.getContext('2d');

    // Resize canvas
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const layers = [
        { color: 'rgba(128, 0, 255, 0.6)', speed: 0.5, amplitude: 100, frequency: 0.01 },
        { color: 'rgba(0, 255, 255, 0.5)', speed: 0.6, amplitude: 80, frequency: 0.02 },
        { color: 'rgba(75, 0, 130, 0.4)', speed: 0.4, amplitude: 60, frequency: 0.015 }
    ];
    let offset = 0;

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        layers.forEach((layer, i) => {
            ctx.beginPath();
            ctx.fillStyle = layer.color;

            for (let x = 0; x <= canvas.width; x++) {
                const y = Math.sin(x * layer.frequency + offset * layer.speed) * layer.amplitude + canvas.height / 2 + i * 50;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }

            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();
        });
        offset += 0.02;
        requestAnimationFrame(draw);
    };

    draw();
});
