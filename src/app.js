//ek server banane ke liye  ot create a server 
// another work is that to config server


//ise server create karenge 
const express = require("express");
const app = express();
// use ek fubnction hain isiliye jab ye chalega toh we have to give semicolon to terminate this 

app.use(express.json());
let notes = [];

//note create krna hai isliye api post use hoga
app.post("/notes", (req, res)=>{
    // console.log(req.body)
notes.push(req.body);
res.status(201).json({
    message:"Notes is created successfully"
});


});


/*GET api */
app.get("/notes", (req, res) =>{
    res.status(200).json({

        notes: notes
    });
});

app.delete("/notes/:mama", (req,res)=>{
    delete notes[ req.params.mama ]
    res.status(204).json({
    message: "Notes are deleted successfully"
    });
});
app.patch("/notes/:index", (req, res)=>{
    notes[ req.params.index ].description = req.body.description

    res.status(200).json({
        message:"Notes are updated successfully"
    });
});
module.exports = app
 /* const express = require("express")
 const app = express()
    
 app.use(express)*/
