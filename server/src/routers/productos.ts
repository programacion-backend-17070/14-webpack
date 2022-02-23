import { Router } from "express"

import carrito from "../controllers/carrito"
// router

const router = Router()

const isAdmin = false

router.post("/", (req, res) => {
  if (!isAdmin) {
    res.send({
      error: -1,
      description: "ruta /api/productos POST not authorized",
    })
  } else {
    // LOGICA PARA CREAR PRODUCTO

    // mandar llamar la clase contenedor para persistir datos
  }
})


router.get("/", carrito.crear)