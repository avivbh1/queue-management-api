const express = require('express')
const router = express.Router()
const controller = require("./controllers")

router.get("/queue", controller.getQueue)

module.exports = router