// server ko bana rha ye toh 
const express = require("express")
   




// second code for kepting into something 
const app = express() /* server yaha create ho ja rha hain yani hamne bana ke yaha rakh diya hain*/

// 10 line of code server req.body ko padhne ke liye ye dunction 
app.use(express.json)




    // 8th line for making note which will store object in array and us variable ka naam hoga notes hi 
    const notes = [
//  {
//      title: "test title 1+",
//      decription: "test description 1"
// }
    ] 
// 7th line jo ki ek function hai app jo API bana rha hain 
app.get("/", (res,req)=>{
    res.send("hello world")
})

//9th line of the code which is for Post method of api which is use new resourse banane ke liye use hota hain 
app.post("/notes", (req,res) =>{
    console.log("req.body")

    //11th line for pushing the body into the notes
    notes.push(req.body)
    console.log(notes)
    //ye 9th wla hi hain
    res.send("note created")
}) 


// 13th line ye api hum n0te ke sath alag func 
app.get("/notes", (req,res) => {
    res.send(notes)
})

// 14th notes ko delete karne ke liye 
app.delete("/notes")

//  server ko run karna hai server.js mein isliye hum isko export karenge 
// third line 

module.exports = app