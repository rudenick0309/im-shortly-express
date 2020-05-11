const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
<<<<<<< HEAD
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.

    //무엇이 시작점?
    //req.body.session으로 findOne, 특정 유저일테니.? findAll?
    res.end();
=======
    // TODO : 유저의 session을 이용하여,
    // 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    // 1) 데이터 베이스에 정보가 있는지 확인
    // 2) 없으면 안보여준다.

    // console.log(req.session.num);
    // console.log(req.body.id);

    users
      .findOne({ where: { id: req.session.num } })
      .then((data) => {
        if (data) {
          console.log(data.dataValues);
          res.status(200).send(data.dataValues);
        } else {
          console.log(session);
          res.status(401).send('need user session');
          // return 'Unauthorized';
        }
      })
      .catch((err) => {
        console.log(err);
      });
>>>>>>> 9dbfa1945799d070e0546948665b7124516617c5
  },
};
