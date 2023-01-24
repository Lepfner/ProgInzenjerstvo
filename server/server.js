const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require("./config/database");
const cors = require("cors");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions")

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.json());

app.use(credentials);
app.use(cors(corsOptions));

const adminsRouter = require("./routes/api/admins");
app.use("/", adminsRouter);
const authsRouter = require("./routes/api/auths");
app.use("/", authsRouter);
const profileRouter = require("./routes/api/profileSetup");
app.use("/", profileRouter);
const likesDislikesRouter = require("./routes/api/likesDislikes")
app.use("/", likesDislikesRouter);
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));

app.get("/", (req, res) => res.send("index"));
