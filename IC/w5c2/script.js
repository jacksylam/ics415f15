/**
* Created by Jack on 9/13/2015.
*/


$(document).ready(function(){
  $("#footer").mouseenter(function(){
      $(this).css('color', 'blue');
  });
});

$(document).ready(function(){
  $("#footer").mouseleave(function(){
      $(this).css('color', 'green');
  });
});


$(document).ready(function(){
  $("#modify").click(function(){
    $(this).load("test.txt");
  });
});


$(document).ready(function(){
$("#emailForm").submit(function(e){
  e.preventDefault();
  var data = $("#email").val();
  console.log(data);
  var datastr='email='+data;
  $.ajax({
    type: "GET",
    url: $("#main"),
    data: datastr,
    success: function(data){
      $("#wellForm").replaceWith(data);
    }
  });
});
});