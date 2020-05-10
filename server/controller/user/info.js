const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.

    //무엇이 시작점?
    //req.body.session으로 findOne, 특정 유저일테니.
    res.end();
  },
};
