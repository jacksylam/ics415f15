/**
* Created by Jack on 9/13/2015.
*/


$(document).ready(function(){
  $("#main").click(function(){
      $(this).hide();
  });
});

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
