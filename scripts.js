var TIMEOUT_INTERVAL = 3000;
var timer;

var current = 0;
var MAX = 4;

function loadComplete() {
  display(0);
  timer = setTimeout("rotate();", TIMEOUT_INTERVAL);
}

function rotate() {
  current = (current+1)%MAX;
  display(current);
  timer = setTimeout("rotate();", TIMEOUT_INTERVAL);
}

function display(index){
  // Carousel display
  var divs = document.getElementById("carousel").getElementsByTagName("div");
  for (var i=0; i < divs.length; i++ ) {
    var div = divs[i];
    if(i != index){
      div.style.display = "none";
    }
    else{
      div.style.display = "block";
    }
  }

  // Index display
  divs = document.getElementById("carousel_index").getElementsByTagName("div");
  for (var i=0; i < divs.length; i++ ) {
    var div = divs[i];
    if(i != index){
      div.style.opacity = "0.6";
      div.style.filter = "alpha(opacity=60)";
    }
    else{
      div.style.opacity = "1.0";
      div.style.filter = "alpha(opacity=100)";
    }
  }
  
  // Clear timer
  clearTimeout(timer);
}
