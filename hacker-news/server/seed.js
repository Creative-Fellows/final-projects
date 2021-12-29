const mongoose = require("mongoose");
const Story = require("./models/Story");
const seedStory = require("../dummy_data");
const dbconnection = require("./db/index");

dbconnection()

const seedDB = async () => {
    await Story.deleteMany({});
    await Story.insertMany(seedStory);
  
  
  };
  

  seedDB().then(() => {
    mongoose.connection.close();
  });
  