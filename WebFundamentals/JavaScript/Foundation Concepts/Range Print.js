function printRange(start, end = start, skip = 1){
  if(end = start) {
    start = 0;
  }

  for(var i = start; i < end; i += skip) {
    console.log(i);
  }
}

printRange(4);
