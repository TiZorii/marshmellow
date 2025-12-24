// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to decorations
window.addEventListener('scroll', function() {
    const decorations = document.querySelectorAll('.decoration');
    const scrolled = window.pageYOffset;
    
    decorations.forEach((decoration, index) => {
        const speed = 0.1 + (index * 0.05);
        decoration.style.transform = `translateY(${scrolled * speed}px)`;
    });
});