//al iniciar selecciona inicio
init("INCIO");
var countMenu = 0;

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(event){
  modal.style.display = "block";
}

function init(incio) {
  document.getElementById("solution").style.display = "none";

  var i, x, tablinks, doc;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  doc = document.getElementById(incio);
  doc.style.display = "block";
  doc.className += " w3-border-red";
}

function openCity(evt, cityName) {
  document.getElementById("solution").style.display = "none";

  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-yellow", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-yellow";
}

function openMenu() {
  document.getElementById("solution").style.display = "none";

  if (countMenu === 0) {
    countMenu = 1;
    document.getElementById("menu").style.display = "grid";
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.backgroundColor = "rgb(8, 36, 90)";
  } else {
    countMenu = 0;
    document.getElementById("menu").style.display = "none";
  }
}

function openCityMenu(evt, cityName) {
  document.getElementById("solution").style.display = "none";

  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.style;
  if (countMenu === 0) {
    countMenu = 1;
    document.getElementById("menu").style.display = "grid";
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.backgroundColor = "rgb(8, 36, 90)";
  } else {
    countMenu = 0;
    document.getElementById("menu").style.display = "none";
  }


}

function showResult() {
  document.getElementById("solution").style.display = "grid";
}
