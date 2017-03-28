function val_gt_sec_gen(arr){
  var new_arr = [];
  if(arr.length > 1){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[1]){
        new_arr.push(arr[i]);
      }

    }
    console.log(new_arr.lenth);
    return new_arr;
  }
  else{
    console.log(new_arr.lenth);
    return "["+ arr + "] does not have a 2nd element.";
  }
}
