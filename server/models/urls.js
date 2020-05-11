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
<<<<<<< HEAD
          data.code = 'D' + shasum.digest('hex').slice(0, 5); //app.js 라우팅 D 부분과 연관
          console.log('임의', data.code, 77, data.url, 777, shasum);
=======
          data.code = 'D' + shasum.digest('hex').slice(0, 5);
          // console.log('임의', data.code, 77, data.url, 777, shasum);
>>>>>>> 478e52a132674b6e817cf57a21e2754befd57174
        },
      },
    }
  );

  urls.associate = function (models) {};
  return urls;
};
