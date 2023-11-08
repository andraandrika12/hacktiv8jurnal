const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { setUserId, getUserId } = require("../helpers/userProfile");
const { User, Post, UserProfile, Tag, PostTag } = require("../models");

class Controller {
    static async register(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body;

    try {
      await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      })



      res.status(201).json({ message: `Email ${email} has been created` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      if (req.body !== null) {
        let user = await User.findOne({ where: { email } });

        if (!user) {
          throw { name: "Invalid input login" };
        }

        const isPasswordValid = comparePass(password, user.password);
        if (!isPasswordValid) {
          throw { name: "Invalid input login" };
        }

        const access_token = signToken({ id: user.id });
        setUserId(user.id)
        // await this.submitProfile(req, res, next);
        res.status(200).json({ access_token });
      }
    } catch (error) {
      next(error);
    }
  }

  

  static async getAllPost(req, res, next) {
    try {
      let showPost = await Post.findAll({
        order: [["id", "DESC"]],
        include: [
          {
            model: Tag,
            attributes: ["tagName"],
          },
          {
            model: User,
            attributes: ["username"],
          },
        ]
      });
     
      res.status(200).json(showPost);
    } catch (error) {
      next(error);
    }
  }

  static async getAllTag(req, res, next) {
    try {
      let showTag = await Tag.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(showTag);
    } catch (error) {
      next(error);
    }
  }

  static async addPost(req, res, next) {
    const { title, content, imgUrl, TagId } = req.body;

    console.log(req.body)
    try {
      await Post.create({
        title,
        content,
        imgUrl,
        UserId: req.user.id,
      })
      .then((post) => {
        let PostId = post.id
        PostTag.create({ PostId, TagId })
      })

     
      console.log(res)
      res.status(201).json({ message: `Post ${req.body.content} is posted` });
    } catch (error) {
      next(error);
    }
  }

  

  static async deletePost(req, res, next) {
    try {
      let postById = +req.params.id;

      let post = await Post.findByPk(postById);
      let postTag = await PostTag.findByPk(postById)
      console.log(post.id, postTag.PostId, '<<<<<<<<<<<<<<')
      
      if (post.id !== postTag.PostId ) {
        throw { name: "Invalid delete" };
      } else {
        await postTag.destroy();
        await post.destroy();
        
        res.json({ message: `Post ${post.content} success to delete` });
      }
      
    } catch (error) {
      next(error);
    }
  }
  
  static async getUserProfile(req, res, next) {
    try {
      let showProfile = await User.findByPk(getUserId());
      res.status(200).json(showProfile);
    } catch (error) {
      next(error);
    }
  }

  static async fetchUserProfile(req, res, next) {
    try {
      let fetchProfile = await UserProfile.findByPk(getUserId());
      res.status(200).json(fetchProfile);
    } catch (error) {
      next(error);
    }
  }

  static async submitProfile(req, res, next) {
   
    try {
       if (!UserProfile.findByPk(getUserId())){
        UserProfile.create({
          firstName: email, 
          lastName: '', 
          gender: '', 
          dateOfBirth: '', 
          profilePicture: '',
          UserId: getUserId()
        })

      res.status(200).json({ message: `userProfile with ${req.body.firstName} created` });
       }
       
    } catch (error) {
      next(error);
    }
  }
  
  static async editProfile(req, res, next) {
    try {
      const { id } = req.params;
      const { firstName, lastName, gender, dateOfBirth, profilePicture } = req.body;

      const profile = await UserProfile.findByPk(id);
      if (!profile) {
        throw { name: "Invalid edit" };
      }

      await UserProfile.update(
        { 
          firstName, 
          lastName, 
          gender, 
          dateOfBirth, 
          profilePicture,
          UserId: req.user.id
        },
        { where: { id } }
      );

      res.status(200).json({ message: `userProfile with ${id} updated` });
    } catch (error) {
      next(error);
    }
  }

  
}

module.exports = Controller;
