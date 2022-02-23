import moment from "moment"

const getTime = () => moment().format("LLLL")

export {
  getTime
}