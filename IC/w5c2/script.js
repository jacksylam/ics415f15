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
    var datastr='email='+data;
    $.ajax({
      method: "get",
      url: "index.html",
      success: function(data){
        $("#emailForm").replaceWith(datastr);
      }
    });
  });
});


function displayForm(){
  var query = location.search;
  query = query.slice(1);
  var array = query.split("&");
  var cleanArray = [];

  for(i = 0; i < array.length; i++) {
    var assignment = array[i].indexOf("=") + 1;
    cleanArray.push(array[i].slice(assignment));
  }


  //Initialize table
  var table = document.getElementById("table");

  //Initialize table headings
  var tableHeader = document.createElement("thead");
  var tableHeaderRow = document.createElement("tr");

  for(i = 0; i < array.length; i++) {
    var tableHeaderLabels = document.createElement("th");
    tableHeaderLabels.appendChild(document.createTextNode(array[i].slice(0, array[i].indexOf("="))));
    tableHeaderRow.appendChild(tableHeaderLabels);
    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);
  }

  //Intiialize table body
  var tableBody = document.createElement("tbody");
  var tableRow = document.createElement("tr");

  for(i = 0; i < cleanArray.length; i++){
    var tableElement = document.createElement("td");
    tableElement.appendChild(document.createTextNode(cleanArray[i]));
    tableRow.appendChild(tableElement);
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
  }

}
