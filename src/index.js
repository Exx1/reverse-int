module.exports = function reverse (n) {
  let str = Math.abs(n) + '';
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result = `${result}${str[i]}`;
  }
  return result;
}
