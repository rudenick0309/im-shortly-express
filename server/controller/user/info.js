const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여,
    // 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    // 1) 데이터 베이스에 정보가 있는지 확인
    // 2) 없으면 안보여준다.

    // console.log(req.session.num);
    // console.log(req.body.id);

    // console.log('123', req.session.num.id);
    if (!req.session.userid) {
      console.log('들어옴');
      res.status(401).send('need user session');
    }

    users
      .findOne({ where: { email: req.session.userid.email } })
      .then((data) => {
        res.status(200).json(data);
        // console.log(77, data);
      });
    // console.log(134, req.session.userid.email);
    // users.findOne({ where: { id: req.session.userid.id } }).then((data) => {
    //   if (data) {
    //     // console.log('세션', req.session);
    //     // console.log(data.dataValues);
    //     console.log(Object.keys(data.dataValues));
    //     res.status(200).send(data.dataValues);
    //   } else {
    //     // console.log('zz', data);
    //     // return 'Unauthorized';
    //     res.status(500).send('need usersdfsdf session');
    //   }
    // });
  },
};
