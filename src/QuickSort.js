
sort = function(input) {
  if(input.length <= 1) {
    return input;
  } else {
    var pivot = input[0]
    var smaller = sort(input.filter(function(item){return item < pivot}));
    var pivots = input.filter(function(item){return item == pivot});
    var greater = sort(input.filter(function(item){return item > pivot}));
    return smaller.concat(pivots).concat(greater);
  }
}
