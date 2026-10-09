//creating a node who can create a node and delete a node and easily update a node
const express = require("express")
const app = express()
// Agar console.log(req.body) ko yano agar (server ko padhna h naki humlog toh screen pe dikhenge but server padhega tabn bhejega user ko request karne pe )padhna hain toh app.use lagana hi hoga wrna console pe undefned dega 
app.use(express.json())
// fronted se jo data aayega wo hum notes m save kara denge  khali array bix mein 
const notes = []

app.post("/notes", (req, res)=> {
    console.log(req.body)
    notes.push(req.body)
    res.send("node created")
})
    app.get("/notes", (req, res) => {
        res.send(notes)
    })

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
