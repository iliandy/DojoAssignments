function dontMindHaveTime(hr, min, per){
  if(hr < 1 || min < 0 || per != "AM" || per != "PM"){
    return;
  }

  var min_statement, per_statement;

  if(0 <= min && min < 30){
    min_statement = "just after";
  }
  else if(30 <= min && min <= 59){
    min_statement = "almost";
    hr++;
  }

  if(per == "AM"){
    per_statement = "in the morning";
  }
  else if(per == "PM"){
    per_statement = "in the evening";
  }

  console.log("It's", min_statement, hr, per_statement + ".");
}

dontMindHaveTime(8, 50, "AM");
