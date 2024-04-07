// Separate Gallery for Hawaii
var slideIndexHawaii = 1;
showDivsHawaii(slideIndexHawaii);

function plusDivsHawaii(n) {
  showDivsHawaii((slideIndexHawaii += n));
}

function showDivsHawaii(n) {
  var i;
  var x = document.getElementsByClassName("center-travel-image-hawaii");
  if (n > x.length) {
    slideIndexHawaii = 1;
  }
  if (n < 1) {
    slideIndexHawaii = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexHawaii - 1].style.display = "block";
}

// Separate Gallery for Shanghai
var slideIndexShanghai = 1;
showDivsShanghai(slideIndexShanghai);

function plusDivsShanghai(n) {
  showDivsShanghai((slideIndexShanghai += n));
}
function showDivsShanghai(n) {
  var i;
  var x = document.getElementsByClassName("center-travel-image-shanghai");
  if (n > x.length) {
    slideIndexShanghai = 1;
  }
  if (n < 1) {
    slideIndexShanghai = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexShanghai - 1].style.display = "block";
}

//Separate Gallery for Vermont
var slideIndexVermont = 1;
showDivsVermont(slideIndexVermont);

function plusDivsVermont(n) {
  showDivsVermont((slideIndexVermont += n));
}
function showDivsVermont(n) {
  var i;
  var x = document.getElementsByClassName("center-travel-image-vermont");
  if (n > x.length) {
    slideIndexVermont = 1;
  }
  if (n < 1) {
    slideIndexVermont = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexVermont - 1].style.display = "block";
}
