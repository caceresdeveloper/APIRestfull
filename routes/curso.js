const routes = require('express').Router()

const {
    findAll,
    findById,
    save,
    update
} = require ('./../controllers.js/curso')

routes.get("/",findAll)
// routes.get("/",(req,res)=>res.send("hhelo world again!!"))

routes.get("/:id",findById)

routes.post("/",save)

//put para modificar
routes.put("/:id",update)

module.exports = routes;