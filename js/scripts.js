function numTranslate(userNum){
  var outputList = [];

  for (var i = 0; i <= userNum; i++) {
    if (i.toString().includes("3")) {
      outputList.push(" I'm sorry, Dave. I'm afraid I can't do that. " );
    } else if (i.toString().includes("2")) {
      outputList.push(" Boop! ");
    } else if (i.toString().includes("1")) {
      outputList.push(" Beep! ");
    } else
      outputList.push(" " +i);
    }
    return outputList;
  }















$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("#inputNums").val());
    var outPutNum = numTranslate(numInput);
    $("#answers").append(outPutNum + ", ");
    $("#answers").show();

  });
});
