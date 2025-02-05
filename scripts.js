
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
const particleCount = 162;
const colors = ['#333333','rgb(255, 255, 255)', '#131414', '#505050', '#15031c'];

function getSpeedFactor() {
    return 0.286;
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
    "Services": "Palvelut",
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
   






"Custom Website Development- Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences.":
"Räätälöidyt Verkkosivut- Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen.",
"Affordable & Efficient- Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks.":
"Edullinen ja Tehokas- Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa.",
"Scrum-Inspired Collaboration- Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed.":
"Rento ja Tehokas Yhteistyö- Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä.",
"Maintenance & Updates- We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services.":
"Ylläpito ja Päivitykset- Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun.",
"Free Website Deployment Guide- Additionally, we offer a guide, mainly for customers who ordered a portfolio, to deploy their domain through GitHub, which is completely free to publish. If you feel that a custom domain is unnecessary for your portfolio, we will help you publish it through GitHub.":
"Verkkosivun ilmainen julkaisuopas- Tarjoamme oppaan erityisesti portfolio-asiakkaillemme, jossa neuvomme, kuinka verkkosivu on mahdollista julkaista GitHubin kautta täysin ilmaiseksi. Jos oma verkkotunnus tuntuu turhalta portfolioon, autamme sinua julkaisemaan sen GitHubin avulla.",
"Why CerebraStyles?":
"Miksi CerebraStyles?",
"Elegant & Distinctive Designs- Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same.":
"Elegantti ja Yksilöllinen- Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta.",
"Affordable & Friendly Service- As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable.":
"Edullinen ja Mutkaton- Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää.",
   
    "Designers": "Suunnittelijat",
    "Start Your Journey,": "Aloita matkasi,"
}; 

const originalTexts = {
    "CerebraStyles": "CerebraStyles",
    "-Digitaalinen visiosi, räätälöity todellisuuteen": "-Your Digital Vision, Tailored to Reality",
    "Meistä": "Us",
    "Palvelut": "Services",
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
    "Räätälöidyt Verkkosivut- Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen.":
    "Custom Website Development- Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences.",

    "Edullinen ja Tehokas- Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa.":
    "Affordable & Efficient- Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks.",

    "Rento ja Tehokas Yhteistyö- Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä.":
    "Scrum-Inspired Collaboration- Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed.",

    "Ylläpito ja Päivitykset- Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun.":
    "Maintenance & Updates- We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services.",

    "Verkkosivun ilmainen julkaisuopas- Tarjoamme oppaan erityisesti portfolio-asiakkaillemme, jossa neuvomme, kuinka verkkosivu on mahdollista julkaista GitHubin kautta täysin ilmaiseksi. Jos oma verkkotunnus tuntuu turhalta portfolioon, autamme sinua julkaisemaan sen GitHubin avulla.":
    "Free Website Deployment Guide- Additionally, we offer a guide, mainly for customers who ordered a portfolio, to deploy their domain through GitHub, which is completely free to publish. If you feel that a custom domain is unnecessary for your portfolio, we will help you publish it through GitHub.",

    "Miksi CerebraStyles?":
    "Why CerebraStyles?",

    "Elegantti ja Yksilöllinen- Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta.":
    "Elegant & Distinctive Designs- Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same.",

    "Edullinen ja Mutkaton- Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää.":
    "Affordable & Friendly Service- As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable.",

    
    
    "Suunnittelijat": "Designers",
    "Aloita matkasi,": "Start Your Journey,"

};

let isTranslated = false;



        document.getElementById("translateButton").addEventListener("click", () => {
            if (!isTranslated) {
                document.getElementById("mainTitle").textContent = translations["CerebraStyles"];
                document.getElementById("tagline").textContent = translations["-Your Digital Vision, Tailored to Reality"];
                document.getElementById("navAbout").textContent = translations["Us"];
                document.getElementById("navServices").textContent = translations["Services"];
                document.getElementById("navCrew").textContent = translations["Crew"];
        
                document.getElementById("navContact").textContent = translations["Contact"];
                document.getElementById("aboutHeading").textContent = translations["Requirements Meet Passion"];
                document.getElementById("aboutText1").textContent = translations["• At CerebraStyles, we deliver tailored websites (UI/UX) to help you stand out and make lasting impressions on others."];
               
                
                document.getElementById("aboutText22").textContent = translations["• We believe that sustainable and innovative web designs come from blending customer centric requirements with our passion for development."];
                document.getElementById("aboutText3").textContent = translations["• At the moment we mainly specialize in smaller projects, such as portfolios, landing pages, and personal brands, to ensure precise and refined results, completed within your timeframe."];
                document.getElementById("aboutText4").textContent = translations["• Our commitment to detail derives not just from client requirements but from our obsession to improve and create unique projects."];
                document.getElementById("aboutText5").textContent = translations["• Every project is an opportunity for us to push our limits and ensure we deliver something better than ever before."];
                document.getElementById("aboutText6").textContent = translations["• During our partnership, our team will work closely with you in a relaxed yet focused manner, delivering thoughtful designs that meet your needs and reflect your vision."];
                
                document.getElementById("servicesHeading").textContent = translations["Services"];
                document.getElementById("serviceText1").textContent = translations["Custom Website Development- Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences."]
                document.getElementById("serviceText2").textContent = translations["Affordable & Efficient- Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks."]
                document.getElementById("serviceText3").textContent = translations["Scrum-Inspired Collaboration- Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed."]
                document.getElementById("serviceText4").textContent = translations["Maintenance & Updates- We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services."]
                document.getElementById("serviceText5").textContent = translations["Free Website Deployment Guide- Additionally, we offer a guide, mainly for customers who ordered a portfolio, to deploy their domain through GitHub, which is completely free to publish. If you feel that a custom domain is unnecessary for your portfolio, we will help you publish it through GitHub."]
                document.getElementById("serviceText6").textContent = translations["Why CerebraStyles?"]
                document.getElementById("serviceText7").textContent = translations["Elegant & Distinctive Designs- Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same."]
                document.getElementById("serviceText8").textContent = translations["Affordable & Friendly Service- As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable."]


                document.getElementById("navCrew").textContent = translations["Crew"];

                document.getElementById("WCrew").textContent = translations["Designers"];

                document.getElementById("contactHeading").textContent = translations["Start Your Journey,"];
        
                isTranslated = true;
                document.getElementById("translateButton").textContent = "🇬🇧";
            } else {
                document.getElementById("mainTitle").textContent = originalTexts["CerebraStyles"];
                document.getElementById("tagline").textContent = originalTexts["-Digitaalinen visiosi, räätälöity todellisuuteen"];
                document.getElementById("navAbout").textContent = originalTexts["Meistä"];
                document.getElementById("navServices").textContent = originalTexts["Palvelut"];
                document.getElementById("navCrew").textContent = originalTexts["Tiimi"];
        
                document.getElementById("navContact").textContent = originalTexts["Yhteystiedot"];
                document.getElementById("aboutHeading").textContent = originalTexts["Vaatimukset kohtaavat intohimon"];
                document.getElementById("aboutText1").textContent = originalTexts["• CerebraStyles suunnittelee räätälöityjä UI/UX-verkkosivustoja, joissa luovuus kohtaa intohimon ja asiakkaan vaatimukset."];
               
                
                document.getElementById("aboutText22").textContent = originalTexts["• Uskomme, että kestävät ja innovatiiviset verkkosivut syntyvät, kun yhdistämme nämä ominaisuudet yhteen kokonaisuuteen."];
                document.getElementById("aboutText3").textContent = originalTexts["• Tällä hetkellä erikoistumme etenkin pienempiin projekteihin, kuten portfolioihin, aloitussivuihin ja henkilöbrändeihin, varmistaaksemme tarkat ja viimeistellyt tulokset."];
                document.getElementById("aboutText4").textContent = originalTexts["• Emme keskity yksityiskohtiin vain asiakkaiden odotusten vuoksi, vaan siksi, että intohimomme kehitykseen ja ainutlaatuisten projektien luomiseen on suunnaton."];
                document.getElementById("aboutText5").textContent = originalTexts["• Jokainen projekti on mahdollisuus meille ylittää rajamme ja toimittaa jotain parempaa kuin koskaan aiemmin."];
                document.getElementById("aboutText6").textContent = originalTexts["• Kumppanuutemme aikana tiimimme työskentelee rennolla, mutta määrätietoisella otteella, tehden tiivistä yhteistyötä kanssasi, tarjoten huolellisesti suunniteltuja ratkaisuja."];
                document.getElementById("servicesHeading").textContent = originalTexts["Palvelut"];
                document.getElementById("serviceText1").textContent = originalTexts["Räätälöidyt Verkkosivut- Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen."];
document.getElementById("serviceText2").textContent = originalTexts["Edullinen ja Tehokas- Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa."];
document.getElementById("serviceText3").textContent = originalTexts["Rento ja Tehokas Yhteistyö- Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä."];
document.getElementById("serviceText4").textContent = originalTexts["Ylläpito ja Päivitykset- Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun."];
document.getElementById("serviceText5").textContent = originalTexts["Verkkosivun ilmainen julkaisuopas- Tarjoamme oppaan erityisesti portfolio-asiakkaillemme, jossa neuvomme, kuinka verkkosivu on mahdollista julkaista GitHubin kautta täysin ilmaiseksi. Jos oma verkkotunnus tuntuu turhalta portfolioon, autamme sinua julkaisemaan sen GitHubin avulla."];
document.getElementById("serviceText6").textContent = originalTexts["Miksi CerebraStyles?"];
document.getElementById("serviceText7").textContent = originalTexts["Elegantti ja Yksilöllinen- Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta."]
document.getElementById("serviceText8").textContent = originalTexts["Edullinen ja Mutkaton- Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää."]


                document.getElementById("navCrew").textContent = originalTexts["Tiimi"];
                document.getElementById("WCrew").textContent = translations["Suunnittelijat"];

                document.getElementById("contactHeading").textContent = originalTexts["Aloita matkasi,"];


        
                isTranslated = false;
                document.getElementById("translateButton").textContent = "🇫🇮";
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
    if (window.innerWidth <= 768) { 
        let textBoxes = document.querySelectorAll(".content-kortti1, .content-kortti2");

        textBoxes.forEach(box => {
            let texts = box.querySelectorAll(".toggle-text"); 
            let index = 0;

            box.addEventListener("click", function () {
                texts.forEach(text => text.style.display = "none");

                index = (index + 1) % texts.length; 
                texts[index].style.display = "block";
            });
        });
    }
});





