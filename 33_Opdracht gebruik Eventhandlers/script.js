const button = document.getElementById("mybutton");

button.addEventListener("click", function () {
  alert("button clicked");
});

var x = document.getElementsByTagName("BODY")[0];
const button1 = document.getElementById("mybutton1");
/*const makeRed = function () {
  x.classList.add("red-background");
};

button1.addEventListener("click", makeRed);
*/
const toggleColor = function () {
  x.classList.toggle("red-background");
};

button1.addEventListener("click", toggleColor);
