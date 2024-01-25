const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send("Welcome," + req.query.name);
});

app.get("/about", (req, resp) => {
    resp.send(`
        <input type="text" placeholder="Type the Name" />
        <button>Click Me</button>
    `);
});

app.get("/help", (req, resp) => {
    resp.send({name:"Ankit Mishra", email:"ankit@gmail.com"});
});


app.listen(4000);