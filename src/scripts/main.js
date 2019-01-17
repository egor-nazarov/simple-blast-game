import 'phaser';
import { gameHandler } from './components/game-handler';

let game;

window.onload = function() {
    let gameConfig = {
        width: 1280,
        height: 905,
        scene: gameHandler,
        backgroundColor: 0xa1a1a1
    };
    game = new Phaser.Game(gameConfig);
    resize();
    window.addEventListener("resize", resize);
};

function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowRatio = windowWidth / windowHeight;
    const gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
