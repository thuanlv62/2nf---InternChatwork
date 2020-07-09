require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const favicon = require('serve-favicon');
const app = express();

//connect db
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true} );
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to db'));

//static file
app.use(express.static(path.join(__dirname, 'public')));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//template engine
app.set("view engine", "pug");
app.set("views", "./views");

//favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//socket.io
const port = process.env.PORT || 8080;
const server = require("http").Server(app);

const io = require("socket.io")(server);
io.on("connection", function (socket) {
    console.log("Socket connected: " + socket.id);
    socket.on("disconnect", function () {
        console.log("Socket disconnected: " + socket.id);
    })
});


// app.use("/api", apiRouter);
// app.use("/", webRouter);






app.get('/', (req, res) => {
  res.json('hello');
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));