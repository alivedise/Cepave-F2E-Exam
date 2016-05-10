export default function sum(...array) {
  if (array.length === 1 && Array.isArray(array[0])) {
    array = array[0];
  } else if (array.length === 1 && typeof(array[0]) === 'number') {   
    var self = function (x) {
      return sum(array[0] + x);
    };
    self.valueOf = self.toString = function () {
      return array[0];
    };

    return self;
  }
  return array.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
}