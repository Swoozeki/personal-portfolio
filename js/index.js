var $btn=document.getElementsByClassName("btn");
var $aboutMe=document.getElementById("about-me");
var $contactMe=document.getElementById("contact-me");
var $portfolio=document.getElementById("portfolio");
var $mainContent=document.getElementById("main-content");

for(var i=0; i<3; i++){
  $btn[i].addEventListener("click",showClickedContent);
}

function showClickedContent(){
  var id=this.getAttribute("id");
  
  $aboutMe.style.display="none";
  $portfolio.style.display="none";
  $contactMe.style.display="none";
  
  if(id==="about-button"){
    $mainContent.style.backgroundColor="#3498db";
    $aboutMe.style.display="block";
  }
  if(id==="portfolio-button"){
    $mainContent.style.backgroundColor="#8e44ad";
    $portfolio.style.display="block";
  }
  if(id==="contact-button"){
    $mainContent.style.backgroundColor="#2ecc71";
    $contactMe.style.display="block";
  }
}