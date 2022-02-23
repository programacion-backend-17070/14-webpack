const span = document.getElementById("clock")

const clock = new Clock()
clock.init((time) => {
  span.innerText = time
})


