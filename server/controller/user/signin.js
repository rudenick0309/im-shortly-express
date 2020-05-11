const { users } = require('../../models');

const crypto = require('crypto');

module.exports = {
  post: (req, res) => {
    // 클라이언트에서 계정 정보를 입력
    // 우선 id 검증
    // 잇다? -> 비번 검증
    //     클라이언트의 raw비번값이랑 해시한 비번 값을 비교. raw비번값을 해시로 변환해서 비교
    //    맞다? 로그인 성공
    //    틀리다? 에러 메세지 출력
    // 없다? -> 에러 메세지 출력

    /*users.findOne .then .then // 
    where :body.email
    
    .dataValues.password (해시된 비밀번호)
    */

    const password = req.body.password;
    const salt = 'jangwon';
    const encryptoPassword = crypto
      .createHmac('sha256', salt)
      .update(password)
      .digest('hex');

    // user의 아이디 찾음
    // TODO : 유저가 로그인을 했을 때, 로그인 실패 ->
    // 회원정보를 데이터베이스에서 확인하고, fineOne으로
    // 회원의 id를 session에 담아주도록 구현하세요

    users
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .then((d) => {
        // 실패 했을 경우 data가 null
        // 성공 했을 경우 ... data.id
        if (d) {
          req.session.user = d.id;
          res.status(200).send(JSON.stringify({ id: req.session.user }));
        } else {
          res.status(404).send('unvalid user');
        }
      });
  },
};
