// Flower petal animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('flower-petal');
    document.body.appendChild(petal);

    const size = Math.random() * 15 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 10 + 8}s`;
    petal.style.opacity = Math.random() * 0.7 + 0.3;

    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}
setInterval(createPetal, 500);

// Floating "I love you" phrases
const lovePhrases = ["Ami tomake bhalobashi", "I love you", "Je t’aime", "Saranghae", "Te amo", "Ti amo", "Ich liebe dich"];
function createFloatingLove() {
    const phrase = document.createElement('div');
    phrase.classList.add('floating-love');
    phrase.textContent = lovePhrases[Math.floor(Math.random() * lovePhrases.length)];
    document.body.appendChild(phrase);

    phrase.style.left = `${Math.random() * 100}vw`;
    phrase.style.fontSize = `${Math.random() * 0.8 + 0.7}em`;
    phrase.style.animationDuration = `${Math.random() * 15 + 15}s`;
    phrase.style.animationDelay = `${Math.random() * 5}s`;

    phrase.addEventListener('animationend', () => {
        phrase.remove();
    });
}
setInterval(createFloatingLove, 2000);

// Saree animation on homepage
function createSareeSwirl() {
    const swirl = document.createElement('div');
    swirl.style.width = `${Math.random() * 200 + 100}px`;
    swirl.style.height = `${Math.random() * 200 + 100}px`;
    swirl.style.top = `${Math.random() * 100}vh`;
    swirl.style.left = `${Math.random() * 100}vw`;
    swirl.style.animationDelay = `${Math.random() * 10}s`;
    document.querySelector('header .red-saree-animation').appendChild(swirl);
}
for (let i = 0; i < 5; i++) {
    createSareeSwirl();
}

// Interactive photo pop-up
const photoButtons = document.querySelectorAll('.photo-button');
const photoModal = document.getElementById('photo-modal');
const photoDisplay = document.getElementById('photo-display');
const closeModal = document.querySelector('.close-btn');

const photoPaths = {
    smile: 'images/smile.jpg',
    eyes: 'images/eyes.jpg',
    saree: 'images/saree.jpg',
    voice: 'images/voice.jpg',
    heart: 'images/heart.jpg',
    feelings: 'images/feelings.jpg'
};

photoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.dataset.section;
        const imagePath = photoPaths[section];

        if (imagePath) {
            photoDisplay.src = imagePath;
            photoModal.style.display = 'flex';
        } else {
            alert('Image not found for this section. Please add it to your images folder!');
        }
    });
});

closeModal.addEventListener('click', () => {
    photoModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.style.display = 'none';
    }
});

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
        musicToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-3 8v-1.88c0-1.29-.62-2.34-1.57-2.92C12.43 12.39 11 10.96 11 9.38V4.83l.01-.01c0-1.1.9-2 2-2H13c1.1 0 2 .9 2 2v4.54c0 .91.13 1.63.4 2.22l-1.35.63c-1.38.65-2.26 1.83-2.6 3.12l-1 4H9.5c.28 0 .5-.22.5-.5V14h-1c-1.1 0-2 .9-2 2s.9 2 2 2h1v-.5c0-.28.22-.5.5-.5zm7-7v2h2v-2zm-4 0h-2v2h2v-2zm-4 0h-2v2h2v-2zM4 14v-2h2v2H4zm0-4V8h2v2H4z"/></svg>';
    }
    isPlaying = !isPlaying;
});

// Scroll heart sparkles
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('span');
    sparkle.classList.add('heart-sparkle');
    sparkle.innerHTML = '❤️';
    document.body.appendChild(sparkle);

    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
});
