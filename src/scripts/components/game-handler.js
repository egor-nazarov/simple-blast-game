import GameAlgorithm from "./game-generator";

export class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        // Ширирна и высота относительно экрана игры
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Отрисовка макетов
        this.items = this.add.group([
            {
                key: "progressBar",
                setXY: {
                    x: width / 2 - 25,
                    y: 63
                }
            },
            {
                key: "menuButton",
                setXY: {
                    x: width - 75,
                    y: 68
                }
            },
            {
                key: "gameField",
                setXY: {
                    x: width / 4 + 25,
                    y: height / 2 + 40
                }
            },
            {
                key: "scorePanel",
                setXY: {
                    x: width / 5 * 4 - 30,
                    y: height / 2 - 80
                }
            },
            {
                key: "bonusBar",
                setXY: {
                    x: width / 5 * 4 - 35,
                    y: height / 5 * 4 + 27
                }
            }
        ]);

        // Кубики
        this.items = this.add.group([
            {
                key: "blueCube",
                setXY: {
                    x: 100,
                    y: 250
                },
                setScale: {
                    x: 0.5,
                    y: 0.5
                }
            },
            {
                key: "greenCube",
                setXY: {
                    x: 200,
                    y: 250
                },
                setScale: {
                    x: 0.5,
                    y: 0.5
                }
            },
            {
                key: "purpleCube",
                setXY: {
                    x: 300,
                    y: 250
                },
                setScale: {
                    x: 0.5,
                    y: 0.5
                }
            },
            {
                key: "redCube",
                setXY: {
                    x: 400,
                    y: 250
                },
                setScale: {
                    x: 0.5,
                    y: 0.5
                }
            },
            {
                key: "yellowCube",
                setXY: {
                    x: 500,
                    y: 250
                },
                setScale: {
                    x: 0.5,
                    y: 0.5
                }
            }
        ]);
    }

    create() {
        this.newGame = new GameAlgorithm({
            rows: 10,
            columns: 10,
            items: 5
        });
        this.newGame.createBoard();
    }
}
