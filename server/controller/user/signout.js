module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그아웃했을 때, session 정보를 없애고, '/'로 redirect할 수 있도록 구현하세요.
<<<<<<< HEAD

    // app.get('/', function(req, res) {
    //   var passedVariable = req.session.valid;
    //   req.session.valid = null; // resets session variable
    //   // Do something
    // });

    //유저의 세션 삭제    req.session.destroy();  or  req.session.destroy() + res.clearCookie('sid'); , app.js에서 쿠키 시간을 설정해을 때

    //넘겨 줄 데이터는 없.

    //res.redirect('/')으로 끝내기
=======
    // 1) 유저의 session 정보를 없엔다.
    // 2) res.redirect '/' 로 해준다.

    // req.session 삭제
    delete req.session;
    res.redirect('/');
>>>>>>> 7f1f002c60e1ca2d285c519cb93bc4ceb8d28466
    res.end();
  },
};
