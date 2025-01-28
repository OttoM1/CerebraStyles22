const canvas = document.getElementById("coolCanvas");
const ctx = canvas.getContext("2d");

let resizeTimeout;
function resizeCanvas() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 100); // Adjusted delay for smoother resizing
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

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

window.onload = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
};












const translations = {
    "~CerebraStyles~": "~CerebraStyles~",
    "-Your Digital Vision, Tailored to Reality": "-Sinun digitaalinen visio, räätälöity todellisuuteen",
    "Us": "Meistä",
    "Design": "Suunnittelu",
    "Contact": "Yhteystiedot",
    "Where Requirements Meet Passion": "Vaatimukset kohtaavat intohimon",
    "• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others.": 
    "• CerebraStyles tarjoaa räätälöityjä verkkosivustoja (UI/UX), jotka jättävät vaikutuksen muihin.",
    "• We believe in sustainable and innovative web designs come from blending customer-centric requirements with our passion for development.": 
    "• Uskomme, että kestävät sekä innovatiiviset verkkosivustot syntyvät, kun yhdistämme asiakaskeskeiset vaatimukset ja meidän intohimo kehittämiseen.",
    "• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe.": 
    "• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset.",
    "Our Work": "Työmme",
    "• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects.": 
    "• Omistautumisemme yksityiskohtiin ei johdu vain asiakkaiden vaatimuksista vaan myös pakkomielteestämme kehittyä ja luoda ainutlaatuisia projekteja.",
    "• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before.": 
    "• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin.",
    "• During our partnership, our team will collaborate closely with you, delivering thoughtful designs that meet your needs and reflect your vision.": 
    "• Kumppanuutemme aikana tiimimme tekee tiivistä yhteistyötä kanssasi ja tarjoaa huolellisesti suunniteltuja ratkaisuja.",
    "Start Your Journey,": "Aloita matkasi,"
};

const originalTexts = {
    "~CerebraStyles~": "~CerebraStyles~",
    "-Sinun digitaalinen visio, räätälöity todellisuuteen": "-Your Digital Vision, Tailored to Reality",
    "Meistä": "Us",
    "Suunnittelu": "Design",
    "Yhteystiedot": "Contact",
    "Vaatimukset kohtaavat intohimon": "Where Requirements Meet Passion",
    "• CerebraStyles tarjoaa räätälöityjä verkkosivustoja (UI/UX), jotka jättävät vaikutuksen muihin.": 
    "• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others.",
    "• Uskomme, että kestävät sekä innovatiiviset verkkosivustot syntyvät, kun yhdistämme asiakaskeskeiset vaatimukset ja meidän intohimo kehittämiseen.": 
    "• We believe in sustainable and innovative web designs come from blending customer-centric requirements with our passion for development.",
    "• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset.": 
    "• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe.",
    "Työmme": "Our Work",
    "• Omistautumisemme yksityiskohtiin ei johdu vain asiakkaiden vaatimuksista vaan myös pakkomielteestämme kehittyä ja luoda ainutlaatuisia projekteja.": 
    "• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects.",
    "• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin.": 
    "• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before.",
    "• Kumppanuutemme aikana tiimimme tekee tiivistä yhteistyötä kanssasi ja tarjoaa huolellisesti suunniteltuja ratkaisuja.": 
    "• During our partnership, our team will collaborate closely with you, delivering thoughtful designs that meet your needs and reflect your vision.",
    "Aloita matkasi,": "Start Your Journey,"
};

let isTranslated = false;

document.getElementById("translateButton").addEventListener("click", () => {
    if (!isTranslated) {
        // Translate to Finnish
        document.getElementById("mainTitle").textContent = translations["~CerebraStyles~"];
        document.getElementById("tagline").textContent = translations["-Your Digital Vision, Tailored to Reality"];
        document.getElementById("navAbout").textContent = translations["Us"];
        document.getElementById("navServices").textContent = translations["Design"];
        document.getElementById("navContact").textContent = translations["Contact"];
        document.getElementById("aboutHeading").textContent = translations["Where Requirements Meet Passion"];
        document.getElementById("aboutText1").textContent = translations["• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others."];
        document.getElementById("aboutText2").textContent = translations["• We believe in sustainable and innovative web designs come from blending customer-centric requirements with our passion for development."];
        document.getElementById("aboutText3").textContent = translations["• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe."];
        document.getElementById("servicesHeading").textContent = translations["Our Work"];
        document.getElementById("servicesText1").textContent = translations["• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects."];
        document.getElementById("servicesText2").textContent = translations["• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before."];
        document.getElementById("servicesText3").textContent = translations["• During our partnership, our team will collaborate closely with you, delivering thoughtful designs that meet your needs and reflect your vision."];
        document.getElementById("contactHeading").textContent = translations["Start Your Journey,"];
        isTranslated = true;
        document.getElementById("translateButton").textContent = "Translate to English";
    } else {
        // Translate back to English
        document.getElementById("mainTitle").textContent = originalTexts["~CerebraStyles~"];
        document.getElementById("tagline").textContent = originalTexts["-Sinun digitaalinen visio, räätälöity todellisuuteen"];
        document.getElementById("navAbout").textContent = originalTexts["Meistä"];
        document.getElementById("navServices").textContent = originalTexts["Suunnittelu"];
        document.getElementById("navContact").textContent = originalTexts["Yhteystiedot"];
        document.getElementById("aboutHeading").textContent = originalTexts["Vaatimukset kohtaavat intohimon"];
        document.getElementById("aboutText1").textContent = originalTexts["• CerebraStyles tarjoaa räätälöityjä verkkosivustoja (UI/UX), jotka jättävät vaikutuksen muihin."];
        document.getElementById("aboutText2").textContent = originalTexts["• Uskomme, että kestävät sekä innovatiiviset verkkosivustot syntyvät, kun yhdistämme asiakaskeskeiset vaatimukset ja meidän intohimo kehittämiseen."];
        document.getElementById("aboutText3").textContent = originalTexts["• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset.."];
        document.getElementById("servicesHeading").textContent = originalTexts["Työmme"];
        document.getElementById("servicesText1").textContent = originalTexts["• Omistautumisemme yksityiskohtiin ei johdu vain asiakkaiden vaatimuksista vaan myös pakkomielteestämme kehittyä ja luoda ainutlaatuisia projekteja."];
        document.getElementById("servicesText2").textContent = originalTexts["• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin."];
        document.getElementById("servicesText3").textContent = originalTexts["• Kumppanuutemme aikana tiimimme tekee tiivistä yhteistyötä kanssasi ja tarjoaa huolellisesti suunniteltuja ratkaisuja."];
        document.getElementById("contactHeading").textContent = originalTexts["Aloita matkasi,"];
        isTranslated = false;
        document.getElementById("translateButton").textContent = "Finnish";
    }
});

