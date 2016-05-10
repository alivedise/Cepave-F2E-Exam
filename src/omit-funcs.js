export default function omitFuncs(props) {
  var result = {};
  for (var prop in props) {
    if (typeof props[prop] === 'object') {
      result[prop] = omitFuncs(props[prop]);
    } else if (typeof props[prop] !== 'function') {
      result[prop] = props[prop];
    }
  }
  return result;
}