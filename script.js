const audioPlayer = document.getElementById('audio-player');
const animalButtons = document.querySelectorAll('.animal-btn');
const nowPlaying = document.getElementById('now-playing');
let currentButton = null;
const SOUND_DURATION = 3000; // All sounds will play for 3 seconds
let soundTimeout = null;

animalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.dataset.sound;
        const animalName = button.querySelector('.name').textContent;
        
        // If the same animal is already playing, stop it
        if (currentButton === button && !audioPlayer.paused) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            button.classList.remove('playing');
            nowPlaying.textContent = '';
            currentButton = null;
            if (soundTimeout) {
                clearTimeout(soundTimeout);
                soundTimeout = null;
            }
            return;
        }
        
        // Stop any previous sound
        if (currentButton) {
            currentButton.classList.remove('playing');
        }
        if (soundTimeout) {
            clearTimeout(soundTimeout);
            soundTimeout = null;
        }
        
        // Play new sound
        audioPlayer.src = `sounds/${soundFile}`;
        audioPlayer.play()
            .then(() => {
                button.classList.add('playing');
                nowPlaying.textContent = `🔊 Playing: ${animalName}`;
                currentButton = button;
                
                // Stop sound after fixed duration
                soundTimeout = setTimeout(() => {
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                    if (currentButton) {
                        currentButton.classList.remove('playing');
                        nowPlaying.textContent = '';
                        currentButton = null;
                    }
                    soundTimeout = null;
                }, SOUND_DURATION);
            })
            .catch(error => {
                console.error('Error playing sound:', error);
                nowPlaying.textContent = `❌ Error: Sound file not found for ${animalName}`;
                nowPlaying.style.color = '#e74c3c';
                
                // Show instructions if files don't exist
                setTimeout(() => {
                    nowPlaying.innerHTML = `💡 <strong>Note:</strong> Place audio files in the "sounds/" folder<br>
                    <small>Required files: monkey.mp3, bear.mp3, elephant.mp3, lion.mp3, snake.mp3, crocodile.mp3, zebra.mp3, rhinoceros.mp3, tiger.mp3, giraffe.mp3, hippopotamus.mp3, kangaroo.mp3</small>`;
                    nowPlaying.style.color = '#666';
                }, 2000);
            });
    });
});

// When sound ends, remove playing class
audioPlayer.addEventListener('ended', () => {
    if (currentButton) {
        currentButton.classList.remove('playing');
        nowPlaying.textContent = '';
        currentButton = null;
    }
    if (soundTimeout) {
        clearTimeout(soundTimeout);
        soundTimeout = null;
    }
});

// Handle audio loading errors
audioPlayer.addEventListener('error', () => {
    if (currentButton) {
        currentButton.classList.remove('playing');
        const animalName = currentButton.querySelector('.name').textContent;
        nowPlaying.textContent = `❌ Error: Could not load sound for ${animalName}`;
        nowPlaying.style.color = '#e74c3c';
    }
});
