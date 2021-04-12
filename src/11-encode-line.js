/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';

  if (str.length < 2) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++;
    } else if (count > 1) {
      result += `${count}${str.charAt(i)}`;
      count = 1;
    } else {
      result += `${str.charAt(i)}`;
    }
  }

  return result;
}

module.exports = encodeLine;
