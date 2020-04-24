$(document).foundation();

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.getElementById("container").scrollLeft += 150;
};
buttonLeft.onclick = function () {
  document.getElementById("container").scrollLeft -= 150;
};

const buttonRightBakery = document.getElementById("slideRightBakery");
const buttonLeftBakery = document.getElementById("slideLeftBakery");

buttonRightBakery.onclick = function () {
  document.getElementById("bakeryBtn").scrollLeft += 150;
};
buttonLeftBakery.onclick = function () {
  document.getElementById("bakeryBtn").scrollLeft -= 150;
};

const buttonRightButchery = document.getElementById("slideRightButchery");
const buttonLeftButchery = document.getElementById("slideLeftButchery");

buttonRightButchery.onclick = function () {
  document.getElementById("butcheryBtn").scrollLeft += 150;
};
buttonLeftButchery.onclick = function () {
  document.getElementById("butcheryBtn").scrollLeft -= 150;
};

const buttonRightCoffee = document.getElementById("slideRightCoffee");
const buttonLeftCoffee = document.getElementById("slideLeftCoffee");

buttonRightCoffee.onclick = function () {
  document.getElementById("coffeeBtn").scrollLeft += 150;
};
buttonLeftCoffee.onclick = function () {
  document.getElementById("coffeeBtn").scrollLeft -= 150;
};
