const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);
// Create a new student
// app.post("/students", (req, res) => {

//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })

// })

//You DO NOT NEED express.json() amd express.urlencoded()
//For GET requests or delete requests we only need it for post and put request

//express.json() is a method inbuilt in express to recognize the incoming request object as a JSON object.
//This method is called as a middleware in your application using the code: app.use(express.json());


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})