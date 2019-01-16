import 'phaser';

import { phaserCheck } from './phaser-check';

const gameConfig = {
    width: 680,
    height: 400,
    scene: phaserCheck
};

new Phaser.Game(gameConfig);
