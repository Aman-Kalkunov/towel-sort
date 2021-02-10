
module.exports = function towelSort(matrix) {
  if (matrix !== undefined && matrix.length !== 0) {
    let array = matrix.reduce((a, b) => {
      if (matrix.indexOf(b) % 2) {
        return a.concat(b.reverse());
      } else {
        return a.concat(b);
      }
    });
    return array;
  }
  return [];
}
