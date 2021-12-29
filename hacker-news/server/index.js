const express = require("express")
const dbconnection = require("./db/index");
const storiesroute = require("./routes/stories.routes");
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors());
dbconnection();

app.use("/", storiesroute);
app.listen(8000, ()=>{console.log("serveur running")})