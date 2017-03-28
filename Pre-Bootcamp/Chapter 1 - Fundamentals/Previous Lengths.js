function prev_len(arr){
  var new_arr = [];

  for(var i = 1; i < arr.length; i++){
    new_arr.push(arr[i - 1].length);
  }

  return new_arr;
}
