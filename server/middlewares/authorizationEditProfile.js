const { UserProfile } = require("../models");

async function authorizationEditProfile(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const findUserProfile = await UserProfile.findByPk(id);

    if (!findUserProfile) {
      throw { name: "not_found", id: id };
    }
    if (req.user.id !== findUserProfile.UserId) {
      throw { name: "forbidden", id: id };
      
    } else {
      next();
    }


  } catch (error) {
    next(error);
  }
}

module.exports = authorizationEditProfile;
