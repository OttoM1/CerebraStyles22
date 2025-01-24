document.addEventListener('DOMContentLoaded', function () {
    // Etsitään elementit
    const button = document.getElementById('animate-button');
    const content = document.getElementById('content');

    // Nappia painamalla käynnistetään animaatio
    button.addEventListener('click', function () {
        // Vaihdetaan piilotetun ja näkyvän osion luokkia
        content.classList.toggle('hidden');
        content.classList.toggle('visible');
    });
});
