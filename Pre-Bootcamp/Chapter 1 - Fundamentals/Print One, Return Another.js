function pt_one_rt_anoth(arr){
  console.log(arr[arr.length - 2]);

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      return arr[i];
    }
  }
}
