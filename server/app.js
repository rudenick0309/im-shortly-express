// sequelize model:create --name user --attributes "name:string, email:string, password:string, salt:string"
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);

const userRouter = require('./routes/user');
const linksRouter = require('./routes/links');

const { urls } = require('./models');

const morgan = require('morgan');

const app = express();
const port = 3001;

// secret: 세션을 암호화 해줌
// resave: 세션을 항상 저장할지 여부를 정하는 값. (false 권장)
// saveUninitialized: 초기화되지 않은채 스토어에 저장되는 세션
// store: 데이터를 저장되는 형식
// 서버에서 세션에 접근을 하려면 req.session을 이용하면 됩니다.

app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
<<<<<<< HEAD
    store: new FileStore(),
=======
>>>>>>> 7f1f002c60e1ca2d285c519cb93bc4ceb8d28466
  })
);
//session 설정에 추가할 부분
// cookie: {
//   maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// ? POSTMAN을 통한 test에 필요할지도 모릅니다. logging을 활용하세요.
app.use(morgan('dev')); //통신코드

// TODO : GET / 요청에 대한 응답을 작성해주세요. (api 구현을 가볍게 시작해보세요.)
// app. ...
app.get('/', (req, res) => {
  res.send('Success');
});

app.get('/D*', (req, res) => {
  urls
    .findOne({
      where: {
        code: 'D' + req.params[0],
      },
    })
    .then((result) => {
      if (result) {
        result.update({
<<<<<<< HEAD
          visits: result.visits + 1, //장원님 레퍼런스에서 num.  https://medium.com/wasd/node-js%EC%99%80-cookie-session%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EB%B3%B4-%EC%A0%80%EC%9E%A5-part-2-dbe84c2f13e4
=======
          visits: result.visits + 1,
>>>>>>> 7f1f002c60e1ca2d285c519cb93bc4ceb8d28466
        });
        res.redirect(result.url);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.use('/user', userRouter); //계정 관련
app.use('/links', linksRouter); //쇼틀리

app.set('port', port);
app.listen(app.get('port'), () => {
  console.log(`app is listening in PORT ${app.get('port')}`);
});

module.exports = app;
