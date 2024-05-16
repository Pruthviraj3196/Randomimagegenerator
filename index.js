const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening ${port}`);
});

app.get("/", (req, res)=> {
    res.send("<h1>Random Image Generator</h1>")
});

app.get("/randomapi", (req, res)=>{
    res.send(`<img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" ></imag>`)
});