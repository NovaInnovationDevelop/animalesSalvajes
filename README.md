# Animal Sounds 🎵

Interactive web page to play animal sounds with a single click.

## How to use

1. Open the `index.html` file in your browser
2. Click on any animal button to hear its sound

## Audio files

For the sounds to work, you need to add audio files to the `sounds/` folder:

- `monkey.mp3` - Monkey sound
- `bear.mp3` - Bear sound
- `elephant.mp3` - Elephant sound
- `lion.mp3` - Lion sound
- `snake.mp3` - Snake sound
- `crocodile.mp3` - Crocodile sound
- `zebra.mp3` - Zebra sound
- `rhinoceros.mp3` - Rhinoceros sound
- `tiger.mp3` - Tiger sound
- `giraffe.mp3` - Giraffe sound
- `hippopotamus.mp3` - Hippopotamus sound
- `kangaroo.mp3` - Kangaroo sound

### Where to get sounds?

You can download free animal sounds from:
- [Freesound.org](https://freesound.org/)
- [Zapsplat](https://www.zapsplat.com/)
- [SoundBible](https://soundbible.com/)

Simply search for the animal sound you need, download it in MP3 format, and place it in the `sounds/` folder with the correct name.

## Project structure

```
animalSounds/
├── index.html      # Main page
├── styles.css      # Styles
├── script.js       # JavaScript logic
├── sounds/         # Folder for audio files (create this folder)
└── README.md       # This file
```

## Features

- ✅ Modern and responsive design
- ✅ Interactive buttons with animations
- ✅ Playing sound indicator
- ✅ Works on mobile and desktop
- ✅ Easy to customize

## Customization

To add more animals:

1. Add a new button in `index.html`:
```html
<button class="animal-btn" data-animal="name" data-sound="file.mp3">
    <span class="emoji">🐾</span>
    <span class="name">Animal Name</span>
</button>
```

2. Add the corresponding audio file in the `sounds/` folder

Enjoy the animal sounds! ���🦁
