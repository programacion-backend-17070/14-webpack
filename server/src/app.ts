import express from "express"
import path from "path"

import Persona from "./persona"
import { getTime } from "./utils"

const app = express()

// archivos staticos que genera nuestro proyecto de UI con webpack
app.use(express.static(path.join(__dirname, "../../public")))

// aqui renderizamos el template de la UI
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../public/index.html")))

const persona = new Persona("Lalo", "Velazquez")
app.get("/time", (req, res) => res.send({
  name: persona.getFullName(),
  time: getTime()
}))

app.listen(
  8080,
  () => console.log("listening")
)