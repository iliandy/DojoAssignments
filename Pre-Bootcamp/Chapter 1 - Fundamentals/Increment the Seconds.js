function inc_sec(arr){
  for(var i = 1; i < arr.length; i+=2){
    arr[i]++;
    console.log(arr[i]);
  }

  return arr;
}
