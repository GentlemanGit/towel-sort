
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];// создаем пустой массив
    if (!matrix) {
        return arr;// выводим пустой массив если не получаем входные данные
    } else {
        for (let i = 0; i < matrix.length; i++) {// иследуем строки матрицы на чётность и нечётность
            if (i % 2 == !0) {//если строка нечётная
                for (let j = matrix[i].length - 1; j >= 0; j--)// каждую нечётную строку помещаем в массив в обратном порядке
                    arr.push(matrix[i][j]);
            } else {
                for (let j = 0; j < matrix[i].length; j++)// каждую чётную строку помещаем в массив в прямом порядке
                    arr.push(matrix[i][j]);
            }
        }
    }
    return arr;//выводим полученный массив
};

