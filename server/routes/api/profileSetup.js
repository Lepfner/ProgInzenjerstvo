const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Sequelize = require("sequelize");
const LikesDislikes = require("../../models/likesDislikes")

router.post("/likesDislikes", async (req, res)=>{
  try{
  const likes_dislikes = [...req.body.likes, ...req.body.dislikes]
  //console.log(likes_dislikes)
  for (let i = 0; i < likes_dislikes.length; i++) {
    const item = likes_dislikes[i];
    console.log(item)
    await LikesDislikes.create({
      ...item
    })
  }
  res.status(201).json({status:"SUCCESS", message:"success"})
}catch(error){
  res.status(400).json({status:"FAILED", message:error})
}
})

router.put("/setup/:id", async (req, res) => {
  try {
    const user = await User.update(
      {
        profileimg: req.body.profileImg,
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        nationality: req.body.nationality,
        location: req.body.location,
        status: req.body.status,
        religion: req.body.religion,
        work: req.body.work,
        education: req.body.education,
        height: req.body.height,
        hair_color: req.body.hair_color,
        eye_color: req.body.eye_color,
        about: req.body.about,
      },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "surname", "date_of_birth", "profileimg", "gender", "eye_color"],
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/search/:query", (req, res) => {
  const query = req.params.query;
  User.findAll({
    attributes: ["id", "name", "surname", "date_of_birth", "profileimg", "gender", "eye_color"],
    where: {
      [Sequelize.Op.or]: [
        {
          name: {
            [Sequelize.Op.iLike]: `%${query}%`
          }
        },
        {
          surname: {
            [Sequelize.Op.iLike]: `%${query}%`
          }
        }
      ]
    },
  })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
