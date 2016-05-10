export default function moveArrayTo(array, arg) {
  var result = array.slice();
  if (Array.isArray(arg)) {
    arg.forEach(function(value, index) {
      if (value >=0 && value < array.length) {
        result.splice(index, 0, result.splice(value, 1)[0]);
      } else {
        throw new Error('no index');
      }
    });
  } else if (typeof arg === 'number') {
    if (arg >=0 && arg < array.length) {
      result.splice(0, 0, result.splice(arg, 1)[0]);
    } else {
      throw new Error('no index');
    }
  }
  return result;
}