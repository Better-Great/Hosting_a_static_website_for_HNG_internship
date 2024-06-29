document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for the heading
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // GSAP animations
    gsap.from('.logo', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.subtitle', { duration: 1, x: -50, opacity: 0, delay: 0.5 });
    gsap.from('.profile', { duration: 1, x: 50, opacity: 0, delay: 1 });
    gsap.from('.message p', { duration: 1, y: 50, opacity: 0, stagger: 0.5, delay: 1.5 });
    gsap.from('.cta-button', { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 2.5 });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        gsap.to('.container', {
            duration: 0.5,
            x: mouseX * 20,
            y: mouseY * 20,
            rotateX: mouseY * 10,
            rotateY: mouseX * 10,
            ease: 'power2.out'
        });
    });
});