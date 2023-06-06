const body = document.querySelector("body");

function changeTheme() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red},${green},${blue})`;

  const change = setTimeout(() => {
    body.style.backgroundColor = randomColor;
    console.log("working");
  }, 1000);

  return change;
}
