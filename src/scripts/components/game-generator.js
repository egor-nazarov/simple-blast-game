class GameAlgorithm {
    constructor(obj) {
        this.rows = obj.rows;
        this.columns = obj.columns;
        this.items = obj.items;
    }

    // Создание игровой доски
    createBoard() {
        this.newGameArray = [];
        for (let i = 0; i < this.rows; i++) {
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

    // Вернуть строки доски
    getRows() {
        return this.rows;
    }

    // Вернуть колонки доски
    getColumns() {
        return this.columns;
    }

    // Вернуть значение кубика если совпало, иначе это не верный кубик
    getValue(row, column) {
        if (!this.validPick(row, column)) {
            return false;
        }
        return this.newGameArray[row][column].value;
    }

    // Проверка на совпадение значения кубиков
    validPick(row, column) {
        return row >= 0 && row < this.rows && column >= 0 && column < this.columns && this.newGameArray[row] !== undefined && this.newGameArray[row][column] !== undefined;
    }

    // Задать произвольное значение выбранному элементу
    setCustomData(row, column, customData) {
        this.newGameArray[row][column].customData = customData;
    }

    // Вернуть произвольное значение кубика
    getCustomData(row, column) {
        return this.newGameArray[row][column].customData;
    }

    // Вернуть объект с кубиками, которые соприкасаются
    listConnectedItems(row, column) {
        if (!this.validPick(row, column) || this.newGameArray[row][column].isEmpty) {
            return;
        }
        this.colorToLookFor = this.newGameArray[row][column].value;
    }

    // Вернуть число соединенных кубиков
    countConnectedItems(row, column) {
        return this.listConnectedItems(row, column).length;
    }
}

export default GameAlgorithm;
