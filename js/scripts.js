function numTranslate(inputNumber){
  var numList = [];
  var num = inputNumber

  for (i = 0; i<= num; i++){
    numList.push(i);
    }
    hasThree = numList.includes(3)
    hasTwo = numList.includes(2)
    hasOne = numList.includes(1)

    console.log(hasThree,hasTwo,hasOne)
    return numList;
  }

















$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("#inputNums").val());
    var outPutNum = numTranslate(numInput);
    $("#answers").append(outPutNum + ", ");
    $("#answers").show();

  })


})
