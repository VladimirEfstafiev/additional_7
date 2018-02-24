module.exports =
function solveSudoku(matrix) {
    return solver(0, -1);

    function checkX(x, y) {
        let element = matrix[x][y];
        for (let j = 0; j < 9; j++) {
            if (matrix[x][j] == element && y != j) {
                return false;
            }
        }
        return true;
    }

    function checkY(x, y) {
        let element = matrix[x][y];
        for (let i = 0; i < 9; i++) {
            if (matrix[i][y] == element && x != i) {
                return false;
            }
        }
        return true;
    }

    function checkSquare(x, y) {
        let element = matrix[x][y];
        let squareX = Math.floor(x / 3);
        let squareY = Math.floor(y / 3);
        for (let i = squareX * 3; i < squareX * 3 + 3; i++) {
            for (let j = squareY * 3; j < squareY * 3 + 3; j++) {
                if (matrix[i][j] == element && x != i && y != j) {
                    return false;
                }
            }
        }
        return true;
    }

    function solver(x, y) {
        y = y + 1;
        if (y > 8) {
            y = 0;
            x = x + 1;
            if (x > 8) {
                return matrix;
            }
        }
        if (matrix[x][y] != null && matrix[x][y] != 0) {
            if (!(checkX(x, y) && checkY(x, y) && checkSquare(x, y))) {
                return false
            }
            return solver(x, y);
        } else {
            for (let element = 1; element < 10; element++) {

                matrix[x][y] = element;
                /* console.log(matrix);
                 console.log("***************************************");*/
                if (checkX(x, y) && checkY(x, y) && checkSquare(x, y)) {
                    if (solver(x, y)) {
                        return matrix;
                    }
                }
            }
            matrix[x][y] = null;
            return false;

        }
    }

}
