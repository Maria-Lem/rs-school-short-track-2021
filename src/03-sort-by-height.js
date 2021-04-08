/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.slice();
  let count = 0;
  newArr.sort((a, b) => a - b);

  while (count < newArr.length && newArr[count] < 0) {
    count++;
  }

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = (arr[i] === -1 ? arr[i] : newArr[count++]);
  }

  return newArr;
}

module.exports = sortByHeight;
