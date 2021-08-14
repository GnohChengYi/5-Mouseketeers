const Information = require("../models/Information");
const router = require("express").Router();

//create information
router.post("/", async (req, res) => {
  const newInfo = new Information(req.body);
  try {
    const savedInfo = await newInfo.save();
    res.status(200).json(savedInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get information
// get "/api/informations?typeTag=i&cat=dining&limit=10"
router.get("/", async (req, res) => {
  const typeTag = req.query.typeTag;
  const category = req.query.cat;
  const limit = req.query.limit;

  let info = [];
  try {
    console.log("start");
    if (typeTag) {
      console.log("has typeTag");
      if (category) {
        console.log("has cat");
        info = await Information.find({
          typeTag: { $in: [typeTag] },
          categoryTag: { $in: [category] },
        }).sort({ announceDate: -1 });
      } else {
        console.log("no cat");
        info = await Information.find({
          typeTag: { $in: [typeTag] },
        }).sort({ announceDate: -1 });
      }
    } else {
      console.log("no typeTag");
      if (category) {
        console.log("has cat");
        info = await Information.find({
          categoryTag: { $in: [category] },
        }).sort({ announceDate: -1 });
      } else {
        console.log("no cat");
        info = await Information.find().sort({ announceDate: -1 });
      }
    }
    if (limit && parseInt(limit, 10) && parseInt(limit, 10) >= 0) {
      info = info.slice(0, parseInt(limit, 10));
    }
    return res.status(200).json(info);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
