'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserProfile)
      User.hasMany(models.Post)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email already registered",
      },
      validate: {
        notNull: {
          msg: "Email is required!",
        },
        notEmpty: {
          msg: "Email is required!",
        },
        isEmail: {
          args: true,
          msg: "Email format is invalid",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password required!",
        },
        notEmpty: {
          msg: "Password required!",
        },
        min: {
          args: 5,
          msg: "Password at least 5 character",
        },
      },
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPass(user.password);
  });
  return User;
};