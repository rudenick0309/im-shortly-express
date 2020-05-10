const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.

    // 클라이언트에서 계정 정보를 입력
    // 우선 id 검증
    // 잇다? -> 비번 검증
    //     클라이언트의 raw비번값이랑 해시한 비번 값을 비교. raw비번값을 해시로 변환해서 비교
    //    맞다? 로그인 성공
    //    틀리다? 에러 메세지 출력
    // 없다? -> 에러 메세지 출력

    /*users.findOne .then .then
     */
    res.end();
  },
};
