export class gameHandler extends Phaser.Scene {
    preload() {
        this.load.image('blueCube', 'assets/cubes/blue-cube.png');
        this.load.image('greenCube', 'assets/cubes/green-cube.png');
        this.load.image('purpleCube', 'assets/cubes/purple-cube.png');
        this.load.image('redCube', 'assets/cubes/red-cube.png');
        this.load.image('yellowCube', 'assets/cubes/yellow-cube.png');
    }

    create() {
        this.add.text(100, 100, 'Phaser – работает!', { fill: '#46eeff' });
        this.add.image(100, 250, 'blueCube');
        this.add.image(200, 250, 'greenCube');
        this.add.image(300, 250, 'purpleCube');
        this.add.image(400, 250, 'redCube');
        this.add.image(500, 250, 'yellowCube');
    }
}
