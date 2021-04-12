/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new Error('Not implemented');

  // console.log(matrix.map(el => el === true ? 1 : 2));
  // for (let i = 0; i < matrix.length; i++) {
  //   // console.log(matrix[i]);
  //   for (let j = 0; j < i; j++) {
  //     if (matrix[j] === true) {
  //       console.log('hi');
  //     }
  //     console.log(matrix[j]);
  //   }
  // }
}

module.exports = minesweeper;
