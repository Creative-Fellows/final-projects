const router = require("express").Router();
const Story = require("../models/Story");
const Author = require("../models/Author");

router.get("/api/author", (req, res) => {
  // Author.find()
  //   .sort({ karma: -1 })

  //   .distinct("id")
  //   .exec(function (err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.json(result);
  //     }
  //   });
  // Author.distinct("id").exec(function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(result);
  //   }
  // });
  Author.aggregate([
    {
      $group: {
        _id: { id: "$id", karma: "$karma", about: "$about" },
      },
    },
    {
      $group: {
        _id: "$_id.id",
        karma: { $first: "$_id.karma" },
        about: { $first: "$_id.about" },
        count: { $sum: 1 },
      },
    },
  ]).exec(function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

// router.post("/search", async (req, res) => {
//   const author = req.body;
//   Author.find({ id: "andrewnc" }, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

module.exports = router;