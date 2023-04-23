const express = require("express")
const app = express();
const port = 3000;

app.use("/static",express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Hosted on port" + port)
})