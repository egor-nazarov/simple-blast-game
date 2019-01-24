class GameAlgorithm {
    constructor(obj) {
        this.rows = obj.rows;
        this.columns = obj.columns;
        this.items = obj.items;
    }

    // Создание игровой доски
    createBoard() {
        this.newGameArray = [];
        for (let i = 0; i < this.rows; i ++) {
            this.newGameArray[i] = [];
            for (let j = 0; j < this.columns; j++) {
                let randomValue = Math.floor(Math.random() * this.items);
                this.newGameArray[i][j] = {
                    value: randomValue,
                    isEmpty: false,
                    row: i,
                    column: j
                }
            }
        }
    }
}

export default GameAlgorithm;
