const router = require("express").Router();
const Story = require("../models/Story");
const Author = require("../models/Author");

router.get("/api/author", (req, res) => {
  Author.find({})
    .sort({ karma: -1 })
    .exec(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
});

module.exports = router;