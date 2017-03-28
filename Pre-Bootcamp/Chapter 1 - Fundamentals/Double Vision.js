function double_vis(arr){
  var new_arr = [];

  for(var i = 0; i < arr.length; i++){
    new_arr.push(arr[i] * arr[i]);
  }

  return new_arr;
}
