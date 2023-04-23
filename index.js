const express = require("express")
const app = express();
const port = 3000;


app.get("/", (req,res) => {
    res.sendFile(express.static(__dirname + "/public/index.html"))
    console.log("Someone Requested")
})
app.listen(port, () => {
    console.log("Hosted on port " + port)
})