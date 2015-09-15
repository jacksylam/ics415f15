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