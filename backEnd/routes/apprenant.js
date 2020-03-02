const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Apprenant = require("../models/Apprenant");
const Comment = require("../models/Comment");

router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "email is required")
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { name, email } = req.body;

    try {
      apprenant = new Apprenant({
        name,
        email
      });
      await apprenant.save();
      res.json(apprenant);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const apprenants = req.query.name
      ? await Apprenant.find({ name: req.query.name })
      : await Apprenant.find();
    res.json(apprenants);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.put(
  "/:id",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "email is required")
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      let apprenant = await Apprenant.findById(req.params.id);
      if (!apprenant)
        return res
          .status(404)
          .send({ msg: "The apprenant with the given ID was not found." });
      apprenant = await Apprenant.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(apprenant);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    await Comment.deleteMany({ apprenant: req.params.id });

    await Apprenant.findByIdAndDelete(req.params.id);

    res.json("Apprenant deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
