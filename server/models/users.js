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
          const salt = 'jangwon';
          const encryptoPassword = crypto
            .createHmac('sha256', salt)
            .update(data.password)
            .digest('hex');
          data.password = encryptoPassword;
        },
      },
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
