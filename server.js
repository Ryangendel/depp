const express = require("express")
const app = express()
const path = require("path")

const PORT = process.env.PORT || 3001
app.use(express.static("build"))
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,"build", "index.html"))
})

app.get("/api/data", (req, res)=>{
    res.sendJSON({a:"data"})
})
app.listen(PORT, ()=>{
    console.log("RUNNING ON PORT " + PORT)
})