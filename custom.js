var tabButtons= document.querySelectorAll(".tabContainers .buttonContainers button");
var tabPanel= document.querySelectorAll(".tabPanel");

function openMenu(PIndex) {
  tabButtons.forEach(function(node){
    node.style.color="";
  });
 
  tabButtons[PIndex].style.color="black";
  

  tabPanel.forEach(function(node){
    node.style.display="none";
  });
  tabPanel[PIndex].style.display="block";
  tabPanel[PIndex].style.color="black";
}
openMenu(0);