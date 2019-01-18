export class PreloaderScene extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        // Макеты
        this.load.image("progressBar", "assets/layouts/progressBar-Background.png");
        this.load.image("menuButton", "assets/layouts/menuButton-Background.png");
        this.load.image("gameField", "assets/layouts/gameField-Background.png");
        this.load.image("scorePanel", "assets/layouts/scorePanel-background.png");
        this.load.image("bonusBar", "assets/layouts/bonusBar-background.png");

        // Игровые элементы
        this.load.image("blueCube", "assets/cubes/blue-cube.png");
        this.load.image("greenCube", "assets/cubes/green-cube.png");
        this.load.image("purpleCube", "assets/cubes/purple-cube.png");
        this.load.image("redCube", "assets/cubes/red-cube.png");
        this.load.image("yellowCube", "assets/cubes/yellow-cube.png");
    }

    create() {
        this.scene.start("Game");
    }
}
