function numTranslate(userNum){
  var outputList = [];
  name = $("#name").val();

  for (var i = 1; i <= userNum; i++) {

    if (i<10 && i%5 === 0) {
      outputList.push(" See, I am smart. This number is five ")
    }
    else if (i.toString().includes("3")) {
      outputList.push(" I'm sorry, " + name + ". I'm afraid I can't do that. " );
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
    var outPutNum = numTranslate(parseInt($("#inputNums").val()));
    $("#answers").text(outPutNum + ", ");
    $("#answers").show();

  });
});
