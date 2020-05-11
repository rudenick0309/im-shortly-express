'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        afterValidate: (data, options) => {
          console.log(data);
          // const salt = 'sunjoo';
          // const rawHash = crypto
          //   .createHmac('sha256', salt)
          //   .update(data.dataValues.password)
          //   .digest('hex');
          // data.dataValues.password = rawHash;
        },
      },
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
