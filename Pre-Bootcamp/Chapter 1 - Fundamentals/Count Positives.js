function count_pos(arr){
  var count = 0;

  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      count++;
    }
  }

  arr[arr.lenth - 1] = count;
  return arr;
}
