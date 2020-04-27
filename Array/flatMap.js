Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};
