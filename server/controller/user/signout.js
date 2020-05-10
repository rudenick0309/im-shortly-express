module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그아웃했을 때, session 정보를 없애고, '/'로 redirect할 수 있도록 구현하세요.

    // app.get('/', function(req, res) {
    //   var passedVariable = req.session.valid;
    //   req.session.valid = null; // resets session variable
    //   // Do something
    // });

    //유저의 세션 삭제    req.session.destroy();
    //넘겨 줄 데이터는 없.

    //res.redirect('/')으로 끝내기
    res.end();
  },
};
