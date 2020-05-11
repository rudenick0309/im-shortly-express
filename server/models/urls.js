'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define(
    'urls',
    {
      url: DataTypes.STRING,
      baseUrl: DataTypes.STRING,
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      visits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      hooks: {
        afterValidate: (data, options) => {
          // console.log('해쉬 전', data.code, 333, data.password);
          var shasum = crypto.createHash('sha1');
          shasum.update(data.url);
          data.code = 'D' + shasum.digest('hex').slice(0, 5);
          // console.log('임의', data.code, 77, data.url, 777, shasum);
        },
      },
    }
  );

  urls.associate = function (models) {};
  return urls;
};
