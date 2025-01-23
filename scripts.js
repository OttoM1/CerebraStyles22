document.addEventListener('DOMContentLoaded', function () {
    // Etsitään nappi, jonka on tarkoitus vierittää palvelut-osioon
    const button = document.querySelector('button');

    // Lisätään tapahtumakuuntelija napille
    button.addEventListener('click', function () {
        // Vieritetään suoraan palvelut-osioon, kun nappia painetaan
        scrollToSection('services');
    });
});

// Funktiona vierittäminen palveluosion alkuun
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        // Käytetään scrollIntoView-funktiota sujuvalla vierityksellä
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
