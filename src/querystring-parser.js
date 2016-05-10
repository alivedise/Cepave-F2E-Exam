export default function querystringParser(url) {
  var urlWithHash = url.split('#')[0];
  var queryCharIndex = urlWithHash.indexOf('?');
  var query = '';
  var queryObject = {};
  if (queryCharIndex) {
    query = urlWithHash.substring(queryCharIndex + 1);
    if (query) {
      var queryArray = query.split('&');
      queryArray.forEach(function(assignment) {
        var assignmentArray = assignment.split('=');
        queryObject[assignmentArray[0]] = JSON.parse(assignmentArray[1]);
      })
    }
  }
  return queryObject;
}