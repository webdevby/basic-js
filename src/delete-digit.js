const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let length = String(n).length;
  let arr = [];

  for(let i = 0; i < length; i++) {
    arr.push(String(n).replace(String(n)[i], ''));
  }
  
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
