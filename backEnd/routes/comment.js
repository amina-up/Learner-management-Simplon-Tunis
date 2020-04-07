const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Comment = require("../models/Comment");
const Apprenant = require("../models/Apprenant");

router.post(
  "/",
  [
    check("option", "option is required")
      .not()
      .isEmpty(),
    check("text", "text is required")
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { comment_id, option, text } = req.body;
    try {
      comment = new Comment({
        comment: comment_id,
        option,
        text
      });
      await comment.save();
      res.json(comment);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

router.get("/:apprenant_id", async (req, res) => {
  try {
    const comments = await Comment.find({ apprenant: req.params.apprenant_id });

    await Apprenant.find({ name: req.query.name });

    res.json(comments);
  } catch (error) {}
});

// router.get("/recent", async (req, res) => {
//   try {
//     let comment = await Comment.find({
//       apprenant: req.params.apprenant_id
//     }).limit(1);
//     res.json(comment);
//   } catch (error) {}
// });

// .sort({ date: -1 })

router.delete("/:id", async (req, res) => {
  try {
    let comment = await Comment.findById(req.params.id);
    if (!comment)
      return res
        .status(404)
        .send({ msg: "The comment with the given ID was not found." });
    comment = await Comment.findByIdAndDelete(req.params.id);
    res.send("comment removed");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
