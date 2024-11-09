import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MainScene from '../scenes/MainScene';
import PreloadScene from '../scenes/PreloadScene';

const Game = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false },
      },
      scene: [PreloadScene, MainScene],
    };

    gameRef.current = new Phaser.Game(config);
    return () => gameRef.current.destroy(true);
  }, []);

  return <div id="game-container" />;
};

export default Game;
