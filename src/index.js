const express = require('express')
const bodyParser = require('body-parser')
const fs = require("fs")

const HOST = process.env.HOST || "0.0.0.0"
const PORT = process.env.PORT || 3000

const app = express()


app.set("views", __dirname + "/views")
app.set("view engine", "jade")

app.get("/", function (req, res, next) {
    res.render("index", {})
})

app.listen(PORT, HOST, function () {
  console.log("listening")
})
