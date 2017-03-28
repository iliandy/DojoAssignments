function whileWait(daysTilBday){
  if(daysTilBday < 0){
    return;
  }

  for(var i = daysTilBday; i >= 0; i--){
    if(i > 30){
      console.log(i, "days until my birthday. Still waiting... :(");
    }
    else if(5 < i && i <= 30){
      console.log(i, "days until my birthday. Almost there!... :)");
    }
    else if(2 <= i && i <= 5){
      console.log(i, "DAYS UNTIL MY BIRTHDAY!!");
    }
    else if(0 < i && i < 2){
      console.log(i, "DAY UNTIL MY BIRTHDAY!!");
    }
    else if(i == 0){
      console.log("♪ღ♪*•.¸¸HAPPY BIRTHDAY♪ღ♪*•♪ღ♪*•.¸¸!!!");
    }
  }
}

whileWait(31);
