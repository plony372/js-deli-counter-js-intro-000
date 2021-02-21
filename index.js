function takeANumber(currntLine, newName){
  currntLine.push(newName)
  return `Welcome, ${newName}. You are number ${currntLine.length} in line.`
} 

function nowServing(currntLine){
  if (currntLine[0]) {
    return `Currently serving ${currntLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currntLine(currntLine){
  var message = "The line is currently:";
  for (var i = 0; i < currntLine.length; i++){
    message = message + " " + `${currntLine.indexOf(currntLine[i])}.` +
                                                    `${currntLine[i]}`;
    
  }
  return message;
}