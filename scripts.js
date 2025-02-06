
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
    return 0.196;
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
   






"Custom Website Development-": "Räätälöidyt Verkkosivut-",
"Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences.":
"Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen.",
"Affordable & Efficient-": "Edullinen ja Tehokas-",
"Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks.":
"Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa.",
"Scrum-Inspired Collaboration-": "Rento ja Tarkka",
"Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed.":
"Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä.",

"Maintenance & Updates-": "Ylläpito ja Päivitykset-",
"We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services.":
"Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun.",
"Website Deployment Guide-": "Verkkosivun julkaisuopas-",
"Additionally, if you feel that a custom domain is unnecessary for your portfolio for example, we offer a guide on how to publish and update your domain through GitHub, which is completely free. However, while the publishing process itself is free, our guide is available for a fee of 20€.":
"Jos koet henkilökohtaisen verkkotunnuksen olevan tarpeeton portfoliosi kannalta, tarjoamme oppaan verkkotunnuksesi julkaisemiseen sekä päivittämiseen GitHubin kautta täysin ilmaiseksi. Julkaisuprosessi itsessään on maksuton käyttäjälle, mutta oppaamme on saatavilla hintaan 20€.",
"Why CerebraStyles?":
"Miksi CerebraStyles?",
"Elegant & Distinctive-": "Elegantti ja Yksilöllinen-",
"Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same.":
"Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta.",
"How?": "Miten?",
"As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable.":
"Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää.",
   
    "Designers": "Suunnittelijat",
    "CEO & Developer": "TJ & Kehittäjä",
    "Ciao! I am Otto, a 22-year-old Computer Science student from Oulu, Finland. To keep it concise, Niko and I really enjoy creating clean, responsive, and unique websites, so why not turn that passion into something meaningful? That is exactly why we ended up on this path, to craft web experiences for those who need them. When I am not coding, you will probably find me rolling on the mat or hitting the golf course during the summer. Nice having you here!": 
    "Moi! Olen Otto, 22-vuotias tietojenkäsittelytieteen opiskelija Oulun yliopistosta. Nikon kanssa meitä yhdistää intohimo selkeisiin, responsiivisiin ja erottuviin verkkosivuihin, joten miksi emme hyödyntäisi sitä luomalla laadukkaita verkkokokemuksia niitä tarvitseville? Juuri tästä syystä päädyimme tälle polulle. Kun en koodaa, vietän todennäköisesti aikaa tatamilla tai kesäisin golfkentällä. Kiva, että olet täällä!",
    "Co-Founder & Developer": "Co-Founder & Suunittelija",

    "Computer Science student at the University of Oulu. An active and positive dude who enjoys solving problems, learning new, and making the internet a more engaging environment pixel at a time. Fueled by design, driven by code, and always on the lookout for fresh ideas and better code.": "Tietojenkäsittelytieteen opiskelija Oulun Yliopistosta. Aktiivinen ja positiivinen tyyppi, joka nauttii ongelmanratkaisusta, uuden oppimisesta ja netin tekemisestä entistä kiinnostavammaksi. Intohimona design ja ohjelmointi, aina pohtimassa uusia ideoita ja ratkaisuja.",
    "Let's Create Your Website Blueprint,": "Aloita matkasi,"
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
    "Räätälöidyt Verkkosivut-": "Custom Website Development-",
    "Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen.":
    "Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences.",
"Edullinen ja Tehokas-": "Affordable & Efficient-",
    "Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa.":
    "Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks.",
"Rento ja Tarkka-": "Scrum-Inspired Collaboration-",
    "Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä.":
    "Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed.",
"Ylläpito ja Päivitykset-": "Maintenance & Updates-",
    "Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun.":
    "We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services.",
"Verkkosivun julkaisuopas-": "Website Deployment Guide-",
    "Jos koet henkilökohtaisen verkkotunnuksen olevan tarpeeton portfoliosi kannalta, tarjoamme oppaan verkkotunnuksesi julkaisemiseen sekä päivittämiseen GitHubin kautta täysin ilmaiseksi. Julkaisuprosessi itsessään on maksuton käyttäjälle, mutta oppaamme on saatavilla hintaan 20€.":
    "Additionally, if you feel that a custom domain is unnecessary for your portfolio for example, we offer a guide on how to publish and update your domain through GitHub, which is completely free. However, while the publishing process itself is free, our guide is available for a fee of 20€.",

    "Miksi CerebraStyles?":
    "Why CerebraStyles?",
"Elegantti ja Yksilöllinen-": "Elegant & Distinctive-",
    "Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta.":
    "Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same.",
"Miten?": "How?",
    "Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää.":
    "As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable.",

    
    
    "Suunnittelijat": "Designers",
    "TJ & Kehittäjä": "CEO & Developer",
    "Moi! Olen Otto, 22-vuotias tietojenkäsittelytieteen opiskelija Oulun yliopistosta. Nikon kanssa meitä yhdistää intohimo selkeisiin, responsiivisiin ja erottuviin verkkosivuihin, joten miksi emme hyödyntäisi sitä luomalla laadukkaita verkkokokemuksia niitä tarvitseville? Juuri tästä syystä päädyimme tälle polulle. Kun en koodaa, vietän todennäköisesti aikaa tatamilla tai kesäisin golfkentällä. Kiva, että olet täällä!": "Ciao! I am Otto, a 22-year-old Computer Science student from Oulu, Finland. To keep it concise, Niko and I really enjoy creating clean, responsive, and unique websites, so why not turn that passion into something meaningful? That is exactly why we ended up on this path, to craft web experiences for those who need them. When I am not coding, you will probably find me rolling on the mat or hitting the golf course during the summer. Nice having you here!",
    "Co-Founder & Suunittelija": "Co-Founder & Developer",
    "Tietojenkäsittelytieteen opiskelija Oulun Yliopistosta. Aktiivinen ja positiivinen tyyppi, joka nauttii ongelmanratkaisusta, uuden oppimisesta ja netin tekemisestä entistä kiinnostavammaksi. Intohimona design ja ohjelmointi, aina pohtimassa uusia ideoita ja ratkaisuja.": "Computer Science student at the University of Oulu. An active and positive dude who enjoys solving problems, learning new, and making the internet a more engaging environment pixel at a time. Fueled by design, driven by code, and always on the lookout for fresh ideas and better code.",
    "Aloita matkasi,": "Let's Create Your Website Blueprint,"

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
document.getElementById("servicehead1").textContent = translations["Custom Website Development-"];
                document.getElementById("serviceText1").textContent = translations["Portfolios, landing pages, and business websites, developed with HTML, CSS, and JavaScript. While we don't offer full backend development, we ensure enjoyable front-end experiences."];
                document.getElementById("servicehead2").textContent = translations["Affordable & Efficient-"];

                
                
                
                 document.getElementById("serviceText2").textContent = translations["Our services are accessible, especially for young professionals, students, and new entrepreneurs looking to establish a strong online presence. Pricing starts at 90€ for simple websites and can go up to 150€ depending on the complexity. Portfolios are typically delivered in one week, while business websites take around two/three weeks."];
                 document.getElementById("servicehead3").textContent = translations["Scrum-Inspired Collaboration-"];

                 document.getElementById("serviceText3").textContent = translations["Our workflow is dynamic yet relaxed, following an iterative approach to ensure our work meets and exceeds expectations. We maintain close communication with our clients throughout the process, ensuring all the adjustments needed."];
                 document.getElementById("servicehead4").textContent = translations["Maintenance & Updates-"];

                 document.getElementById("serviceText4").textContent = translations["We offer ongoing maintenance for an additional fee, ensuring that your website stays up to date. However, major design overhauls or structural changes fall outside of regular maintenance services."];
                 document.getElementById("servicehead5").textContent = translations["Website Deployment Guide-"];

                 document.getElementById("serviceText5").textContent = translations["Additionally, if you feel that a custom domain is unnecessary for your portfolio for example, we offer a guide on how to publish and update your domain through GitHub, which is completely free. However, while the publishing process itself is free, our guide is available for a fee of 20€."];
                document.getElementById("serviceText6").textContent = translations["Why CerebraStyles?"]
                document.getElementById("servicehead7").textContent = translations["Elegant & Distinctive-"];

                document.getElementById("serviceText7").textContent = translations["Goal for every website should be a reflection of its owner, which is why we focus on unique styling and attention to detail. Our approach ensures that no two projects look the same."];
                document.getElementById("servicehead8").textContent = translations["How?"];

                document.getElementById("serviceText8").textContent = translations["As we primarily do this as a hobby, we manage to keep our pricing reasonable while still delivering quality results. Our craft is professional yet relaxed, making collaboration enjoyable."];

                
                document.getElementById("navCrew").textContent = translations["Crew"];

                document.getElementById("WCrew").textContent = translations["Designers"];
                document.getElementById("ottoh").textContent = translations["CEO & Developer"];

                document.getElementById("ottot").textContent = translations["Ciao! I am Otto, a 22-year-old Computer Science student from Oulu, Finland. To keep it concise, Niko and I really enjoy creating clean, responsive, and unique websites, so why not turn that passion into something meaningful? That is exactly why we ended up on this path, to craft web experiences for those who need them. When I am not coding, you will probably find me rolling on the mat or hitting the golf course during the summer. Nice having you here!"];
                
                document.getElementById("nikoh").textContent = translations["Co-Founder & Developer"];

                document.getElementById("nikot").textContent = translations["Computer Science student at the University of Oulu. An active and positive dude who enjoys solving problems, learning new, and making the internet a more engaging environment pixel at a time. Fueled by design, driven by code, and always on the lookout for fresh ideas and better code."];

                

                document.getElementById("contactHeading").textContent = translations["Let's Create Your Website Blueprint,"];
        
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
                document.getElementById("servicehead1").textContent = originalTexts["Räätälöidyt Verkkosivut-"];

                document.getElementById("serviceText1").textContent = originalTexts["Portfoliot, laskeutumissivut sekä yrityssivustot käyttäen HTML, CSS ja JavaScript. Emme tarjoa täyttä backend-kehitystä, mutta takaamme sujuvan ja käyttäjäystävällisen etusivukokemuksen."];
                document.getElementById("servicehead2").textContent = originalTexts["Edullinen ja Tehokas-"];

                document.getElementById("serviceText2").textContent = originalTexts["Palvelumme sopivat erityisesti opiskelijoille, nuorille ammattilaisille ja aloitteleville yrittäjille, jotka haluavat tehdä vahvan digitaalisen vaikutuksen. Hinnat alk. 90€ yksinkertaisille sivustoille ja voivat nousta 150€ riippuen monimutkaisuudesta. Portfolio valmistuu noin viikossa, kun taas yrityssivusto vie kahdesta kolmeen viikkoa."]; 

                document.getElementById("servicehead3").textContent = originalTexts["Rento ja Tarkka-"];

document.getElementById("serviceText3").textContent = originalTexts["Työskentelemme iteraatioissa, varmistaen, että lopputulos vastaa odotuksia ja jopa ylittää ne. Pidämme yhteyttä asiakkaisiin projektin aikana ja teemme tarvittavia hienosäätöjä."];
document.getElementById("servicehead4").textContent = originalTexts["Ylläpito ja Päivitykset-"];

document.getElementById("serviceText4").textContent = originalTexts["Tarjoamme jatkuvaa ylläpitoa lisämaksusta, jotta sivustosi pysyy ajan tasalla. Suuret rakenteelliset tai tyyli-muutokset eivät sisälly ylläpitopalveluun."];
document.getElementById("servicehead5").textContent = originalTexts["Verkkosivun julkaisuopas-"];

document.getElementById("serviceText5").textContent = originalTexts["Jos koet henkilökohtaisen verkkotunnuksen olevan tarpeeton portfoliosi kannalta, tarjoamme oppaan verkkotunnuksesi julkaisemiseen sekä päivittämiseen GitHubin kautta täysin ilmaiseksi. Julkaisuprosessi itsessään on maksuton käyttäjälle, mutta oppaamme on saatavilla hintaan 20€."];
document.getElementById("serviceText6").textContent = originalTexts["Miksi CerebraStyles?"];
document.getElementById("servicehead7").textContent = originalTexts["Elegantti ja Yksilöllinen-"];

document.getElementById("serviceText7").textContent = originalTexts["Jokaisen verkkosivun tulisi heijastaa sen omistajaa, joten keskitymme ainutlaatuiseen tyyliin ja pieniin yksityiskohtiin. Yksikään projekti ei tule näyttämään samanlaiselta."];
document.getElementById("servicehead8").textContent = originalTexts["Miten?"];

document.getElementById("serviceText8").textContent = originalTexts["Koska teemme tätä ensisijaisesti harrastuksena, voimme pitää hinnoittelun kohtuullisena ja silti tuottaa laadukkaita sivuja. Yhteistyömme on ammattimainen mutta rento, mikä tekee siitä sujuvaa sekä viihtyisää."];


                document.getElementById("navCrew").textContent = originalTexts["Tiimi"];
                document.getElementById("WCrew").textContent = originalTexts["Suunnittelijat"];
                document.getElementById("ottoh").textContent = originalTexts["TJ & Kehittäjä"];

                document.getElementById("ottot").textContent = originalTexts["Moi! Olen Otto, 22-vuotias tietojenkäsittelytieteen opiskelija Oulun yliopistosta. Nikon kanssa meitä yhdistää intohimo selkeisiin, responsiivisiin ja erottuviin verkkosivuihin, joten miksi emme hyödyntäisi sitä luomalla laadukkaita verkkokokemuksia niitä tarvitseville? Juuri tästä syystä päädyimme tälle polulle. Kun en koodaa, vietän todennäköisesti aikaa tatamilla tai kesäisin golfkentällä. Kiva, että olet täällä!"];
                document.getElementById("nikoh").textContent = originalTexts["Co-Founder & Suunittelija"];

                document.getElementById("nikot").textContent = originalTexts["Tietojenkäsittelytieteen opiskelija Oulun Yliopistosta. Aktiivinen ja positiivinen tyyppi, joka nauttii ongelmanratkaisusta, uuden oppimisesta ja netin tekemisestä entistä kiinnostavammaksi. Intohimona design ja ohjelmointi, aina pohtimassa uusia ideoita ja ratkaisuja."];


                document.getElementById("contactHeading").textContent = originalTexts["Aloita matkasi,"];


        
                isTranslated = false;
                document.getElementById("translateButton").textContent = "🇫🇮";
            }
        
            
        
 /*
        
            document.getElementById("navTeam").addEventListener("click", (event) => {
                event.preventDefault();
                document.querySelectorAll(".content-section").forEach((section) => {
                    section.classList.add("hidden"); 
                });
                document.getElementById("team").classList.remove("hidden");
            }); */
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

