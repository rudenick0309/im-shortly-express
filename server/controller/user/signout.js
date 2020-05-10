module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그아웃했을 때, session 정보를 없애고, '/'로 redirect할 수 있도록 구현하세요.
    // 1) 유저의 session 정보를 없엔다.
    // 2) res.redirect '/' 로 해준다.

    // req.session 삭제
    delete req.session;
    res.redirect('/');
    res.end();
  },
};
