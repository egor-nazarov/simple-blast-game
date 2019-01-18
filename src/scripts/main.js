import 'phaser';
import config from "./config/config"
import { GameHandler } from './components/game-handler';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add("Game", GameHandler);
        this.scene.start("Game");
    }
}

window.onload = function() {
    window.game = new Game();
    resize();
    window.addEventListener("resize", resize);
};

function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowRatio = windowWidth / windowHeight;
    const gameRatio = window.game.config.width / window.game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
