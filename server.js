const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const app = express()
app.set("view engine", "hbs")
app.listen(3000, () => {
    console.log("getting turnt on port 3000")
})
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/users", (req, res) => {
    res.render("users/index", {})
})