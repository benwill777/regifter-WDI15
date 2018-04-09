const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const app = express()


app.listen(3000, () => {
    console.log("getting turnt on port 3000")
})
app.get("/", (req, res) => {
    res.send("Hello World")
})
res.redirect("/users", (req, res) => {
    res.send("Users Page")
})