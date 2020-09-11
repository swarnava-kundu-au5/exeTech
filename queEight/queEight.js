function sortById(Obj) {
  var sortedArray = [];

  for (var i in Obj) {
    sortedArray.push([i, Obj[i]]);
  }

  return sortedArray.sort();
}
