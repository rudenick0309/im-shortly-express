const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.

    //클라이언트에서 계정 기록을 post요청 들어옴
    // 이 때 기존회원기록이 있는지 먼저 확인
    // 기존회원이다?
    // yes -> 에러 메세지 출력
    // no -> 디비 저장(sql에 넣기)

    res.status(200).end();
  },
};
