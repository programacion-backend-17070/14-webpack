import moment from "moment"

class Clock {
  constructor () {
    this.time = moment()
    this.interval = null
  }

  init(cb) {
    this.interval = setInterval(() => {
      this.time = this.time.add(1, "seconds")
      console.log(this.time.format("h:mm:ss a"))
      if (!cb) {
        return
      }
      cb(this.time.format("h:mm:ss a"))
    }, 1000)
  }

  end() {
    clearInterval(this.interval)
  }
}

export default Clock