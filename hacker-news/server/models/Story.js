const mongoose = require("mongoose");

const strorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  by: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Story = mongoose.model("Story", strorySchema);

module.exports = Story;