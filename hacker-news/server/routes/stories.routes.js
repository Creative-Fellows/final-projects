const router = require("express").Router();
const Story = require("../models/Story");

router.get("/api/stories/", (req, res) => {
    Story.find({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  });

  module.exports = router;