const mongoose = require("mongoose");
const Story = require("./models/Story");
const seedStory = require("../dummy_data");
const dbconnection = require("./db/index");
const Author = require("./models/Author");
dbconnection()

var x = [];
for (const obj of seedStory) {
  x.push(obj.by);
}

const seedDB = async () => {
    await Story.deleteMany({});
    await Story.insertMany(seedStory);
  
    await Author.deleteMany({});
    await Author.insertMany(x);
  };
  

  seedDB().then(() => {
    mongoose.connection.close();
  });
  