document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('scroll-to-services');
    const servicesSection = document.getElementById('services');

    button.addEventListener('click', function () {
        // Lisää "visible" luokka palvelut-osioon ja vieritä siihen
        servicesSection.classList.add('visible');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});
