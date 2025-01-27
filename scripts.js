/*
const canvas = document.getElementById("coolCanvas");
const ctx = canvas.getContext("2d"); 




let resizeTimeout;
function resizeCanvas() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 100); // Resize after 100ms delay
}



resizeCanvas();
window.addEventListener("resize", resizeCanvas);
// Particles Array
const particles = [];
const particleCount = 172;
const colors = ['#333333', '#333333', '#131414', '#505050'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 0.5 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.05) * 0.6;
        this.speedY = (Math.random() - 0.08) * 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create Particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}
animate();


document.getElementById("revealButton").addEventListener("click", () => {
    document.getElementById("mainContent").classList.remove("hidden");

    const revealContainer = document.getElementById("revealContainer");
    revealContainer.classList.add("hidden");
    revealContainer.style.display = "none"; 
});

function revealSection(sectionId) {
    document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetSection = event.target.getAttribute("href").substring(1); 
        revealSection(targetSection);
    });
});







window.onload = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
};
*/



