// Import modules
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan");
const cors = require("cors");
let port = process.env.PORT || 8080;
let path = require("path");

// Import database modesls and routes
const userRoute = require("./routes/users");
const infoRoute = require("./routes/informations");
const assistRoute = require("./routes/assistances");

// Read from the .env file
dotenv.config();

// Connet to database
mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));

  // Routes
  app.use("/api/users", userRoute);
  app.use("/api/informations", infoRoute);
  app.use("/api/assistances", assistRoute);

  server.listen(port, () => {
      console.log("Server listening on port: " + port);
  });