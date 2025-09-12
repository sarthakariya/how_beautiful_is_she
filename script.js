// Heart loader animation and content reveal
document.addEventListener('DOMContentLoaded', () => {
    const heartLoader = document.getElementById('heart-loader');
    const mainContent = document.querySelector('main');
    const musicButton = document.getElementById('musicToggle');
    const sections = document.querySelectorAll('.section');

    const loadDuration = 3000;

    setTimeout(() => {
        heartLoader.style.opacity = '0';
        setTimeout(() => {
            heartLoader.style.display = 'none';
            mainContent.style.opacity = '1';
            musicButton.classList.add('active');
            
            // Particles.js initialization
            tsParticles.load("particles-js", {
                particles: {
                    number: { value: 40, density: { enable: true, value_area: 800 } }, // Reduced from 80 to 40
                    color: { value: "#ffffff" },
                    shape: {
                        type: "circle",
                        stroke: { width: 0, color: "#000000" },
                        polygon: { nb_sides: 5 },
                    },
                    opacity: {
                        value: 0.3, // Slightly reduced for a softer glow
                        random: false,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
                    },
                    size: {
                        value: 2.5, // Slightly smaller size
                        random: true,
                        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.2, // Reduced from 0.4 to 0.2
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2, // Reduced from 6 to 2 for a more subtle drift
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                        resize: true,
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 },
                    },
                },
                retina_detect: true,
                });

            // Trigger animations for sections as they come into view
            const observerOptions = {
                root: null,
                threshold: 0.2,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

        }, 1000);
    }, loadDuration);

    // Easter egg functionality
    const easterEggTrigger = document.querySelector('.easter-egg-trigger');
    const footer = document.querySelector('footer');

    easterEggTrigger.addEventListener('click', () => {
        if (document.querySelector('.easter-egg-message')) {
            return;
        }
        const easterEggMessage = document.createElement('p');
        easterEggMessage.classList.add('easter-egg-message');
        easterEggMessage.textContent = "You found it! Your love is my favorite secret. 😊";
        footer.appendChild(easterEggMessage);
        
        setTimeout(() => {
            easterEggMessage.classList.add('active');
        }, 100);
    });
});

// Starry background animation
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);
    const size = Math.random() * 2 + 1; // Slightly smaller max size
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 8 + 4}s`; // Stars last longer
    star.addEventListener('animationend', () => star.remove());
}
setInterval(createStar, 300); // Slower interval for fewer stars

// Music toggle
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>';
    } else {
        backgroundMusic.play();
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M
