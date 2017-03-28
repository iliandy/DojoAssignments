function flex_countdown(lowNum, highNum, mult){
  for(var i = highNum; i >= lowNum; i--){
    if(i % mult == 0){
      console.log(i);
    }
  }
}
