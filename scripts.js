document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('coolCanvas');
    const ctx = canvas.getContext('2d');

    // Resize canvas dynamically
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const colors = ['#FFFFFF', '#FFFFFF', '#1ABC9C', '#D3D3D3'];

    // Create particle
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
        });
    }

    // Animate particles
    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce particles off the edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });

        requestAnimationFrame(animateParticles);
    };

    animateParticles();
});


















let particles = [];

function Particle(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;   // Adjust this to control size
    this.speed = speed; // Adjust this to control speed
    this.velocityX = (Math.random() - 0.5) * this.speed;
    this.velocityY = (Math.random() - 0.5) * this.speed;
}

// Create particles function
function createParticles() {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let size = Math.random() * 1 + 0.5; // Random size between 1 and 3
    let speed = 0.2; // Adjust speed to control particle movement

    let particle = new Particle(x, y, size, speed);
    particles.push(particle);
}

// Update particles
function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
        let particle = particles[i];
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        // Recycle particle when it moves off-screen
        if (particle.x > canvas.width || particle.x < 0 || particle.y > canvas.height || particle.y < 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

// Draw particles
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
    }
}

// Main animation loop
function animate() {
    createParticles(); // Create new particles
    updateParticles(); // Update their positions
    drawParticles();   // Draw them on canvas

    requestAnimationFrame(animate); // Keep the animation going
}

animate();

