
const canvas = document.getElementById("coolCanvas");
const ctx = canvas.getContext("2d");

let resizeTimeout;
function resizeCanvas() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 100);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const particleCount = 190;
const colors = ['#333333','rgb(255, 255, 255)', '#131414', '#505050', '#15031c'];

function getSpeedFactor() {
    return 0.386;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
       this.radius = (Math.random() * 0.002 + 0.005) * Math.min(canvas.width, canvas.height);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        const speedFactor = getSpeedFactor();
        this.speedX = (Math.random() - 0.5) * speedFactor;
        this.speedY = (Math.random() - 0.5) * speedFactor;
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
    "CerebraStyles": "CerebraStyles",
    "-Your Digital Vision, Tailored to Reality": "-Digitaalinen visiosi, räätälöity todellisuuteen",
    "Us": "Meistä",
    "Design": "Toteutus",
    "Crew": "Tiimi",
    "Contact": "Yhteystiedot",
    "Requirements Meet Passion": "Vaatimukset kohtaavat intohimon",
    "• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others.": 
    "• CerebraStyles suunnittelee räätälöityjä UI/UX-verkkosivustoja, joissa luovuus kohtaa intohimon ja asiakkaan vaatimukset.",
    "• We believe that sustainable and innovative web designs come from blending customer centric requirements with our passion for development.": 
    "• Uskomme, että kestävät ja innovatiiviset verkkosivut syntyvät, kun yhdistämme nämä ominaisuudet yhteen kokonaisuuteen.",
    "• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe.": 
    "• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset.",
    "• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects.": 
    "• Emme keskity yksityiskohtiin vain asiakkaiden odotusten vuoksi, vaan siksi, että intohimomme kehitykseen ja ainutlaatuisten projektien luomiseen on suunnaton.",
    "• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before.": 
    "• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin.",
    "• During our partnership, our team will work closely with you in a relaxed yet focused manner, delivering thoughtful designs that meet your needs and reflect your vision.": 
    "• Kumppanuutemme aikana tiimimme työskentelee rennolla mutta määrätietoisella otteella, tehden tiivistä yhteistyötä kanssasi ja tarjoten harkittuja suunnitteluratkaisuja, jotka vastaavat tarpeitasi ja heijastavat visiotasi.",
   "Designers": "Suunnittelijat",
    "Start Your Journey,": "Aloita matkasi,"
}; 

const originalTexts = {
    "CerebraStyles": "CerebraStyles",
    "-Digitaalinen visiosi, räätälöity todellisuuteen": "-Your Digital Vision, Tailored to Reality",
    "Meistä": "Us",
    "Toteutus": "Design",
    "Tiimi": "Crew",
    "Yhteystiedot": "Contact",
    "Vaatimukset kohtaavat intohimon": "Requirements Meet Passion",
    "• CerebraStyles suunnittelee räätälöityjä UI/UX-verkkosivustoja, joissa luovuus kohtaa intohimon ja asiakkaan vaatimukset.": 
    "• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others.",
    "• Uskomme, että kestävät ja innovatiiviset verkkosivut syntyvät, kun yhdistämme nämä ominaisuudet yhteen kokonaisuuteen.": 
    "• We believe that sustainable and innovative web designs come from blending customer centric requirements with our passion for development.",
    "• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset.": 
    "• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe.",
    "Toteutus": "Design",
    "• Emme keskity yksityiskohtiin vain asiakkaiden odotusten vuoksi, vaan siksi, että intohimomme kehitykseen ja ainutlaatuisten projektien luomiseen on suunnaton.": 
    "• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects.",
    "• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin.": 
    "• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before.",
    "• Kumppanuutemme aikana tiimimme työskentelee rennolla, mutta määrätietoisella otteella, tehden tiivistä yhteistyötä kanssasi, tarjoten huolellisesti suunniteltuja ratkaisuja.": 
    "• During our partnership, our team will work closely with you in a relaxed yet focused manner, delivering thoughtful designs that meet your needs and reflect your vision.",
    "Suunnittelijat": "Designers",
    "Aloita matkasi,": "Start Your Journey,"

};

let isTranslated = false;



        document.getElementById("translateButton").addEventListener("click", () => {
            if (!isTranslated) {
                document.getElementById("mainTitle").textContent = translations["CerebraStyles"];
                document.getElementById("tagline").textContent = translations["-Your Digital Vision, Tailored to Reality"];
                document.getElementById("navAbout").textContent = translations["Us"];
                document.getElementById("navServices").textContent = translations["Design"];
                document.getElementById("navCrew").textContent = translations["Crew"];
        
                document.getElementById("navContact").textContent = translations["Contact"];
                document.getElementById("aboutHeading").textContent = translations["Requirements Meet Passion"];
                document.getElementById("aboutText1").textContent = translations["• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others."];
               
                
                document.getElementById("aboutText22").textContent = translations["• We believe that sustainable and innovative web designs come from blending customer centric requirements with our passion for development."];
                document.getElementById("aboutText3").textContent = translations["• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe."];
                document.getElementById("servicesHeading").textContent = translations["Design"];
                document.getElementById("servicesText1").textContent = translations["• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects."];
                document.getElementById("servicesText2").textContent = translations["• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before."];
                document.getElementById("servicesText3").textContent = translations["• During our partnership, our team will work closely with you in a relaxed yet focused manner, delivering thoughtful designs that meet your needs and reflect your vision."];
                document.getElementById("navCrew").textContent = translations["Crew"];

                document.getElementById("WCrew").textContent = translations["Designers"];

                document.getElementById("contactHeading").textContent = translations["Start Your Journey,"];
        
                isTranslated = true;
                document.getElementById("translateButton").textContent = "English";
            } else {
                document.getElementById("mainTitle").textContent = originalTexts["CerebraStyles"];
                document.getElementById("tagline").textContent = originalTexts["-Digitaalinen visiosi, räätälöity todellisuuteen"];
                document.getElementById("navAbout").textContent = originalTexts["Meistä"];
                document.getElementById("navServices").textContent = originalTexts["Toteutus"];
                document.getElementById("navCrew").textContent = originalTexts["Tiimi"];
        
                document.getElementById("navContact").textContent = originalTexts["Yhteystiedot"];
                document.getElementById("aboutHeading").textContent = originalTexts["Vaatimukset kohtaavat intohimon"];
                document.getElementById("aboutText1").textContent = originalTexts["• CerebraStyles suunnittelee räätälöityjä UI/UX-verkkosivustoja, joissa luovuus kohtaa intohimon ja asiakkaan vaatimukset."];
               
                
                document.getElementById("aboutText22").textContent = originalTexts["• Uskomme, että kestävät ja innovatiiviset verkkosivut syntyvät, kun yhdistämme nämä ominaisuudet yhteen kokonaisuuteen."];
                document.getElementById("aboutText3").textContent = originalTexts["• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset."];
                document.getElementById("servicesHeading").textContent = originalTexts["Toteutus"];
                document.getElementById("servicesText1").textContent = originalTexts["• Emme keskity yksityiskohtiin vain asiakkaiden odotusten vuoksi, vaan siksi, että intohimomme kehitykseen ja ainutlaatuisten projektien luomiseen on suunnaton."];
                document.getElementById("servicesText2").textContent = originalTexts["• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin."];
                document.getElementById("servicesText3").textContent = originalTexts["• Kumppanuutemme aikana tiimimme työskentelee rennolla, mutta määrätietoisella otteella, tehden tiivistä yhteistyötä kanssasi, tarjoten huolellisesti suunniteltuja ratkaisuja."];
                document.getElementById("navCrew").textContent = originalTexts["Tiimi"];
                document.getElementById("WCrew").textContent = translations["Suunnittelijat"];

                document.getElementById("contactHeading").textContent = originalTexts["Aloita matkasi,"];

               /* document.getElementById("navCrew").textContent = originalTexts["Tiimi"]; */

        
                isTranslated = false;
                document.getElementById("translateButton").textContent = "Finnish";
            }
        
        
        

        
            document.getElementById("navTeam").addEventListener("click", (event) => {
                event.preventDefault();
                document.querySelectorAll(".content-section").forEach((section) => {
                    section.classList.add("hidden"); 
                });
                document.getElementById("team").classList.remove("hidden");
            });
        });



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) { // Apply only on mobile
        let textBoxes = document.querySelectorAll(".content-kortti1, .content-kortti2");

        textBoxes.forEach(box => {
            let texts = box.querySelectorAll(".toggle-text"); // Select all toggleable text elements
            let index = 0;

            box.addEventListener("click", function () {
                // Hide all texts
                texts.forEach(text => text.style.display = "none");

                // Show the next text
                index = (index + 1) % texts.length; // Cycle through text options
                texts[index].style.display = "block";
            });
        });
    }
});





