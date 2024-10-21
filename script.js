const readMoreBtn = document.getElementById('readMoreBtn');
const extraContent = document.getElementById('extraContent');

readMoreBtn.addEventListener('click', () => {
    const isVisible = extraContent.style.display === 'block';
    extraContent.style.display = isVisible ? 'none' : 'block';
    readMoreBtn.textContent = isVisible ? 'Read More' : 'Read Less';
});

const ratingCards = document.querySelectorAll('.card');

ratingCards.forEach(card => {
    const stars = card.querySelectorAll('.star');
    const ratingText = card.querySelector('.rating-text');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.dataset.value;
            const championName = star.dataset.champion;

            stars.forEach(s => {
                s.classList.remove('active');
            });

            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }

            ratingText.textContent = `You rated ${championName} ${rating} star(s)`;
        });
    });
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night');
    const isNight = document.body.classList.contains('night');
    themeToggle.textContent = isNight ? 'Switch to Day Mode' : 'Switch to Night Mode';
});




function playSound() {
    const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3'];
    const randomIndex = Math.floor(Math.random() * sounds.length); 
    const audio = new Audio(sounds[randomIndex]); 
    audio.play();
}