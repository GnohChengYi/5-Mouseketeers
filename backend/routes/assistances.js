const Assistance = require("../models/Assistance");
const router = require("express").Router();

//create assistance
router.post("/", async (req, res) => {
    const newAssist = new Assistance(req.body);
    try {
      const savedAssist = await newAssist.save();
      res.status(200).json(savedAssist);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get assistance
// get "/api/informations?typeTag=indiv&cat=dining&limit=10"
router.get("/", async (req, res) => {
    const typeTag = req.query.typeTag;
    const category = req.query.cat;
    const limit = req.query.limit;

    let assistance = [];
    try {
      if (typeTag) {
        if (cat) {
            assistance = await Assistance.find({
                typeTag:{$in: [typeTag]},
                categoryTag: {$in: [category]}
            }).sort({announceDate: -1});
        } else {
            assistance = await Assistance.find({
                typeTag:{$in: [typeTag]}
            }).sort({announceDate: -1});
        }
      } else {
        if (cat) {
            assistance = await Assistance.find({
                categoryTag: {$in: [category]}
            }).sort({announceDate: -1});
        } else {
            assistance = await Assistance.find().sort({announceDate: -1});
        }
      }
      if (limit && parseInt(limit,10) && parseInt(limit,10) >= 0) {
          assistance = assistance.slice(0, parseInt(limit,10));
      }
      return res.status(200).json(assistance);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;