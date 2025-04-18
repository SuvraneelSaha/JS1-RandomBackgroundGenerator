// Step 1 - make a function that has the code for changing of the rgb color

// Step 2 -  grab all the components that are needed to be changed ;

// use a handle event ie when the user clicks on it it will act accordingly

function generateRandomRgbColour() {
  const red = Math.floor(Math.random() * 256); // 0-255
  const green = Math.floor(Math.random() * 256); // 0-255
  const blue = Math.floor(Math.random() * 256); // 0-255
  return `rgb(${red}, ${green}, ${blue})`; // Backticks for template literal
}

// Traditional function for event handling
function changeBackgroundColor() {
  const changeButton = document.getElementById("Change-Btn"); // No extra quote
  const root = document.getElementById("root");

  changeButton.addEventListener("click", function () {
    const randomColor = generateRandomRgbColour();
    root.style.backgroundColor = randomColor;
  });
}

window.onload = function () {
  changeBackgroundColor();
};
