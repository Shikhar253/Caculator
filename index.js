

function clscr() {
  document.getElementById("res").value = "";
}
function dis(val) {
//   console.log("button clicked");
  document.getElementById("res").value += val;
}

function calc() {
  var expression = document.getElementById("res").value;
  document.getElementById("res").value = eval(expression);
}
