import Clock from "./clock"

const span = document.getElementById("clock")

Clock.init((time) => {
  span.innerText = time
})


