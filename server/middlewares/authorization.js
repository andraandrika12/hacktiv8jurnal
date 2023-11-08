const { Post } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const findPost = await Post.findByPk(id);

    if (!findPost) {
      throw { name: "not_found", id: id };
    }
    if (req.user.id !== findPost.UserId) {
      throw { name: "forbidden", id: id };
      
    } else {
      next();
    }


  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
