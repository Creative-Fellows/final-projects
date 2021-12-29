const express=require("express");
const app=express();
const dbconnection=require("./db/index");
const storiesroute=require("./routes/stories.routes");
const authorsroute = require("./routes/authors.routes");
const cors=require("cors");

app.use(express.json());
app.use(cors());
dbconnection();

app.use("/",storiesroute);
app.use("/", authorsroute);

app.listen(8000,()=> {console.log("server running")})