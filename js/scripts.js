function numTranslate(inputNumbers){
  var num = [];
  var arrNums = num.push(inputNumbers);
  console.log(num)

  for (i=0; i<num; i++){
    

      console.log(i)
    }
  }

















$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("#inputNums").val());
    $("#answers").show();
    numTranslate(numInput)
  })


})
