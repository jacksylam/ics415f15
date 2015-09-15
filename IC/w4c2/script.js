/**
 * Created by Jack on 9/13/2015.
 */


function createParagraph(){
  var paragraph = document.createElement("p");
  var node = document.createTextNode("New stuff.");
  paragraph.appendChild(node);


var element = document.getElementById("main");
  element.appendChild(paragraph);
}

function changeMainOnClick(){
 var p = document.getElementById("main");
  p.style.color = "blue";
}

function changeFooterOnOver(){
  var footer = document.getElementsByTagName("p");
  var i;

  for(i=0; i< footer.length; i++){
    footer[i].style.backgroundColor = "green";
  }
}

function changeSidebarOnLeave(){
  var sidebar = document.getElementById("sidebar");

  var date = new Date();

  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("the date is" + date.getDate().toString()));

  sidebar.appendChild(listItem);
}

function displayForm(){
  var query = location.search;
  query = query.slice(1);
  var array = query.split("&");
  var cleanArray = [];

  for(i = 0; i < array.length; i++) {
    console.log(array[i]);
    var assignment = array[i].indexOf("=") + 1;
    cleanArray.push(array[i].slice(assignment));
  }

  console.log(cleanArray);

var table = document.getElementById("table");

var tableHeader = document.createElement("thead");
var tableHeaderRow = document.createElement("tr");


for(i = 0; i < array.length; i++) {
  var tableHeaderLabels = document.createElement("th");
  tableHeaderLabels.appendChild(document.createTextNode(array[i].slice(0, array[i].indexOf("="))));
  tableHeaderRow.appendChild(tableHeaderLabels);
  tableHeader.appendChild(tableHeaderRow);
  table.appendChild(tableHeader);
}

}
