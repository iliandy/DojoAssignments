function fewBil(days){
  if (days < 0) {
    return;
  }

  var payment = 0.01;
  var sum = 0;

  for (var i = 1; i <= days; i++) {
    // sum += payment;
    // payment *= 2;
    sum = payment * Math.pow(2, i);
  }

  console.log(sum);
}

fewBil(5);
