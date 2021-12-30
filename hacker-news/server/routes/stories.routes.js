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

router.get("/api/stori", (req, res) => {
  // Story.aggregate([
  //   {
  //     $group: {
  //       _id: { kids: "$kids" },

  //       count: { $sum: "$kids" },
  //     },
  //   },
  // ]).exec(function (err, results) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(results);
  //   }
  // });
  // Story.aggregate([
  //   {
  //     $project: {
  //       item: 1,
  //       numberofcom: {
  //         $cond: {
  //           if: { $isArray: "$kids" },
  //           then: { $size: "$kids" },
  //           else: "NA",
  //         },
  //       },
  //     },
  //   },
  // ]).exec(function (err, results) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(results);
  //   }
  // });
  Story.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "by",
        foreignField: "id",
        as: "authstory",
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

module.exports = router;