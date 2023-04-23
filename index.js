const express = require("express")
const app = express();
const port = 3000;



app.get("/", (req,res) => {
    res.sendFile("/public/video.mp4", {root: __dirname})
    console.log("Someone Requested")
})
app.listen(port, () => {
    console.log("Hosted on port " + port)
})