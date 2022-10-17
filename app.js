/* selection */
const btn = document.querySelector("#btn");
const container = document.querySelector("#root");

//change background color by clicking btn
window.onload = function () {
  btn.addEventListener("click", function () {
    container.style.background = rgbColor();
  });
};

//createRgb
function rgbColor() {
  const red = generateRGB();
  const green = generateRGB();
  const blue = generateRGB();
  return `rgb(${red}, ${green}, ${blue})`;
}

//generate rgb
function generateRGB() {
  return Math.floor(Math.random() * 255);
}
