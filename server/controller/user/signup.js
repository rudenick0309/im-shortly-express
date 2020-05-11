const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.

<<<<<<< HEAD
    //create .then .catch
=======
    // 1) 유저가 회원가입을 했을 때
    // 2) 회원 정보를 DB에 저장

    // findOrCreate - > created false면 기존에 있는 거 error 메세지
    // created (true) 디비에 그대로 저장되는... 완료 ..

>>>>>>> 478e52a132674b6e817cf57a21e2754befd57174
    //클라이언트에서 계정 기록을 post요청 들어옴
    // 이 때 기존 회원기록이 있는지 먼저 확인
    // 기존회원이다?
    // yes -> 에러 메세지 출력 409
    // no -> 디비 저장(sql에 넣기)
    // findOrCreate -> 있으면 그대로 찾고 없으면 만들어 주는 ... 배열로 나오고 boolean false, true

    users
      .findOrCreate({
        where: { email: req.body.email },
        default: {
          username: req.body.username,
          password: req.body.password,
        },
      })
      .then(([data, created]) => {
        if (created) {
          res.status(200).send(data);
        } else {
          res.status(409).send('Already exists user');
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  },
};

// data.forEach((d) => {
//   if (d.dataValues === undefined) {
//     res.status(500).send('error');
//   } else {
//     if (req.body.email === d.dataValues.email) {
//       res.status(409).send('Already exists user');
//     } else {
//       console.log('123456666');
//     }
//   }
// });
