const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    // 1) 유저의 로그인을 확인 한다.
    // 2) 유저의 회원정보를 데이터베이스에서 확인한다.
    // 3) 회원의 id 를 session에 담아준다.

    res.end();
  },
};
