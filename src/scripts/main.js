import "phaser";
import config from "./config/config";
import { PreloaderScene } from "./components/game-preload";
import { GameScene } from "./components/game-handler";

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add("Preloader", PreloaderScene);
        this.scene.add("Game", GameScene);
        this.scene.start("Preloader");
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
    if(windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
