'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {}

  Course.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A title is required',
          },
          notEmpty: {
            msg: 'Please provide a title',
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A description is required',
          },
          notEmpty: {
            msg: 'Please provide a description',
          },
        },
      },
      estimatedTime: DataTypes.STRING,
      materialsNeeded: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
    }
  );
  Course.associate = models => {
    Course.belongsTo(models.User, {
      // establish 1-1 relationship
      as: 'user', // alias
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      },
    });
  };
  return Course;
};
