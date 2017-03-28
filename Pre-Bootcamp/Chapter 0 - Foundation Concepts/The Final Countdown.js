function final_countdown(param1, param2, param3, param4){
  var i = param2;

  while(i <= param3){
    if(i % param1 == 0){
      if(i == param4){
        i++;
        continue;
      }
      console.log(i);
    }
    i++;
  }
}
