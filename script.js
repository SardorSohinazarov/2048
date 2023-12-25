tails = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

document.addEventListener('keyup', (event) => {
  if (event.code == "ArrowLeft") {
      slideLeft();
  }
  else if (event.code == "ArrowRight") {
      slideRight();
  }
  else if (event.code == "ArrowUp") {
      slideUp();
  }
  else if (event.code == "ArrowDown") {
      slideDown();
  }

  console.log(e.code);
})

