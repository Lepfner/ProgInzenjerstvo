const express = require("express");
const router = express.Router();

const LikesDislikes = require("../../models/likesDislikes");

router.post("/likesDislikes", async (req, res) => {
  try {
    const likes_dislikes = [...req.body.likes, ...req.body.dislikes];
    await LikesDislikes.destroy({where: {user_id: req.query.userID}})
    
    for (let i = 0; i < likes_dislikes.length; i++) {
      const item = likes_dislikes[i];
      console.log(item);
      await LikesDislikes.create({
        ...item,
      });
    }
    res.status(201).json({ status: "SUCCESS", message: "success" });
  } catch (error) {
    res.status(400).json({ status: "FAILED", message: error });
  }
});

router.get("/likes/:id", async (req, res) => {
    try {
        const likes = await LikesDislikes.findAll({
            where: {user_id: req.params.id, "likes/dislikes":"\x31"},
            attributes: ["thing"]
        })
        res.status(200).json(likes)
    } catch (error) {
        res.status(400).json({ status: "FAILED", message: error });
    }
})

router.get("/dislikes/:id", async (req, res) => {
  try {
    const dislikes = await LikesDislikes.findAll({
      where: { user_id: req.params.id, "likes/dislikes": "\x30" },
      attributes: ["thing"]
    });
    res.status(200).json(dislikes);
  } catch (error) {
    res.status(400).json({ status: "FAILED", message: error });
  }
});

module.exports = router;