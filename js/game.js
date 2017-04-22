function swapToMain() {
  document.getElementById("maintab").style.display="block";
  document.getElementById("techtree").style.display="none";
  document.getElementById("wartab").style.display="none";
}

function swapToTech() {
  document.getElementById("maintab").style.display="none";
  document.getElementById("techtree").style.display="block";
  document.getElementById("wartab").style.display="none";
}

function swapToWar() {
  document.getElementById("maintab").style.display="none";
  document.getElementById("techtree").style.display="none";
  document.getElementById("wartab").style.display="block";
}