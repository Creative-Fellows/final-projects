const mongoose = require("mongoose");

const connectiondb = () => {
    mongoose
      .connect("mongodb://localhost:27017/hakernewsdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB...");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  module.exports = connectiondb;
  