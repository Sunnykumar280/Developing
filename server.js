const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send("Hello")
})

app.get("./about", (req, res) => {
    res.send("hi buddy")
})

app.listen(3000)