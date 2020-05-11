const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.
<<<<<<< HEAD

    //무엇이 시작점?
    //req.body.session으로 findOne, 특정 유저일테니.? findAll?
    res.end();
=======
    // 1) 유저의 세션이 존재 하는 지 확인한다.
    // 2) 유저의 세션이 존재 한다면 유저의 정보를 제공한다.
    // 3) 유저의 세션이 존재 하지 않다면 에러 메세지를 보내 준다.
    // if (!req.session.user) {
    //   res.status(400).send('아이디를 만들어 주세요');
    // }
    // users.findOne({ where: { email: req.session.user.email } }).then((data) => {
    //   res.status(200).send(JSON.stringify(data));
    // });
    if (!req.session.user) {
      return res.status(401).send('need user session');
    }
    users
      .findOne({
        where: {
          email: req.session.user.email,
        },
      })
      .then((result) => res.status(200).json(result));
>>>>>>> 7f1f002c60e1ca2d285c519cb93bc4ceb8d28466
  },
};
