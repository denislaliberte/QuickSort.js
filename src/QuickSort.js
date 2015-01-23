
sort = function(input) {
  if(input.length <= 1) {
    return input;
  } else {
    var pivot = input[0]
    var smaller = input.filter(function(item){return item < pivot});
    var result = [pivot].concat(smaller);
    return smaller.concat([pivot]);
  }
}
