import express from "express"
import path from "path"

import { getTime } from "./utils"
import Persona from "./persona"

const app = express()
const persona = new Persona("Lalo", "Velazquez")
app.use(express.static(path.join(__dirname, "../../public")))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '../../public/index.html')))

app.get("/time", (req, res) => res.send({
  time: getTime(),
  name: persona.getFullName()
}))

app.listen(
  8080,
  () => console.log("listening")
)