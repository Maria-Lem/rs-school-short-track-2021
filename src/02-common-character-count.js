/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  let index = 0;
  let count = 0;

  s1Array.filter((str1) => {
    index = s2Array.findIndex((str2) => str1 === str2);
    if (index >= 0) {
      count++;
      s2Array.splice(index, 1);
    }
    return count;
  });

  return count;
}

module.exports = getCommonCharacterCount;
