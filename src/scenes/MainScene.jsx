// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//   constructor() {
//     super('MainScene');
//   }

//   create() {
//     // Add a ground background
//     this.add.tileSprite(400, 300, 800, 600, 'ground');

//     // Create the player character
//     this.player = this.physics.add.sprite(100, 100, 'character').setCollideWorldBounds(true);

//     // Create an obstacle (fence)
//     this.fence = this.physics.add.staticGroup();
//     this.fence.create(400, 300, 'fence');

//     // Add collision between player and fence
//     this.physics.add.collider(this.player, this.fence);

//     // Keyboard controls
//     this.cursors = this.input.keyboard.createCursorKeys();
//   }

//   update() {
//     // Reset player velocity
//     this.player.setVelocity(0);

//     // Movement controls
//     if (this.cursors.left.isDown) {
//       this.player.setVelocityX(-160);
//     } else if (this.cursors.right.isDown) {
//       this.player.setVelocityX(160);
//     }
//     if (this.cursors.up.isDown) {
//       this.player.setVelocityY(-160);
//     } else if (this.cursors.down.isDown) {
//       this.player.setVelocityY(160);
//     }
//   }
// }

// export default MainScene;


import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    // Add a ground background
    this.add.tileSprite(400, 300, 800, 600, 'ground');

    // Create the player character with animations
    this.player = this.physics.add.sprite(100, 100, 'character').setCollideWorldBounds(true);

    // Define animations based on character sprite frames
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('character', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('character', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('character', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
    });

    // Create an obstacle (fence)
    this.fence = this.physics.add.staticGroup();
    this.fence.create(400, 300, 'fence');

    // Add collision between player and fence
    this.physics.add.collider(this.player, this.fence);

    // Keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Reset player velocity and animations
    this.player.setVelocity(0);

    // Movement and animations
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
  }
}

export default MainScene;
