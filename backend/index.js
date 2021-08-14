// Import modules
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
let port = process.env.PORT || 8080;
let path = require("path");

// Import database modesls and routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const infoRoute = require("./routes/informations");
const assistRoute = require("./routes/assistances");

// Read from the .env file
dotenv.config();

// Connet to database
mongoose
  .connect(
    "mongodb+srv://bingsen:5mouseketeers@cluster0.ag8nj.mongodb.net/LIT2021?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//setup for production environment
if (process.env.NODE_ENV === "production") {
  console.log("environment is production!");
  console.log("__dirname is: " + __dirname);
  app.use(express.static(path.join(__dirname, "/dist")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/dist", "index.html"));
  });
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/dist", "index.html"));
  });
  app.get("/assistance", function (req, res) {
    res.sendFile(path.join(__dirname, "/dist", "index.html"));
  });
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "/dist", "index.html"));
  });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/informations", infoRoute);
app.use("/api/assistances", assistRoute);

server.listen(port, () => {
  console.log("Server listening on port: " + port);
});
