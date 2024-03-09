const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "Welcome to contack book application."});

});
app.use("/api/contacts", contactsRouter);
module.exports = app;