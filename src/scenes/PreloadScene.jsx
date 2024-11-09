// import Phaser from 'phaser';

// class PreloadScene extends Phaser.Scene {
//   constructor() {
//     super('PreloadScene');
//   }

//   preload() {
//     this.load.image('ground', 'assets/ground.png');
//     this.load.spritesheet('character', 'assets/character.png', { frameWidth: 32, frameHeight: 48 });
//     this.load.image('fence', 'assets/fence.png');
//   }

//   create() {
//     this.scene.start('MainScene');
//   }
// }

// export default PreloadScene;


// import Phaser from 'phaser';

// class PreloadScene extends Phaser.Scene {
//   constructor() {
//     super('PreloadScene');
//   }

//   preload() {
//     this.load.image('ground', '../assets/ground.png');
//     this.load.spritesheet('character', '../assets/character.png', { frameWidth: 32, frameHeight: 48 });
//     this.load.image('fence', '../assets/fence.png');
//   }

//   create() {
//     this.scene.start('MainScene');
//   }
// }

// export default PreloadScene;


import groundImage from '../assets/ground.png';
import characterImage from '../assets/character.png';
import fenceImage from '../assets/fence.png';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    console.log('Loading assets...');

    // Load assets using imported paths
    this.load.image('ground', groundImage)
      .on('filecomplete-image-ground', () => console.log('Loaded ground.png'))
      .on('loaderror', (file) => console.error('Failed to load:', file.key));

    this.load.spritesheet('character', characterImage, { frameWidth: 32, frameHeight: 48 })
      .on('filecomplete-spritesheet-character', () => console.log('Loaded character.png'))
      .on('loaderror', (file) => console.error('Failed to load:', file.key));

    this.load.image('fence', fenceImage)
      .on('filecomplete-image-fence', () => console.log('Loaded fence.png'))
      .on('loaderror', (file) => console.error('Failed to load:', file.key));
  }

  create() {
    console.log('Preloading complete, starting MainScene...');
    this.scene.start('MainScene');
  }
}

export default PreloadScene;
