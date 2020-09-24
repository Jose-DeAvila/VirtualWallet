import express from 'express';

const app = express();

app.get("/api/users", (req, res) => {
    res.send("Hola!");
});

app.listen(5000, () => {console.log("Server started at port 5000")});