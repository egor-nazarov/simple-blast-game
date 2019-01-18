export class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        // Ширирна и высота относительно экрана игры
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Отрисовка макетов
        this.add.image(width / 2 - 25, 63, "progressBar");
        this.add.image(width - 75, 68, "menuButton");
        this.add.image(width / 4 + 25, height / 2 + 40, "gameField");
        this.add.image(width / 5 * 4 - 30, height / 2 - 80, "scorePanel");
        this.add.image(width / 5 * 4 - 35, height / 5 * 4 + 27, "bonusBar");

        // Кубики
        this.add.image(100, 250, "blueCube");
        this.add.image(200, 250, "greenCube");
        this.add.image(300, 250, "purpleCube");
        this.add.image(400, 250, "redCube");
        this.add.image(500, 250, "yellowCube");
    }

    create() {
    }
}
