function numTranslate(){
  alert();

}














$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("#inputNums").val());
    $("#answers").show();
    numTranslate(numInput)
  })


})
