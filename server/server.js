const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require("./config/database");
const fixtures = require("./fixtures/fixtures");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./docs/swaggerDoc.json");

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.json());
app.use(cors());

const adminsRouter = require("./routes/admins");
app.use("/api", adminsRouter);
const authsRouter = require("./routes/auths");
app.use("/api", authsRouter);
const profileRouter = require("./routes/users");
app.use("/api", profileRouter);

app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) => res.send("index"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
