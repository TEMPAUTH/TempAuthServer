var express=require('express'), http = require('http');

// ===== Passport 사용 ===== //
var passport = require('passport');
var flash = require('connect-flash');

//익스프레스 객체 생성
var app = express();

//라우터 객체 생성
var router = express.Router();


//기본 포트를 app 객체 속성으로 설정
app.set('port', process.env.PORT || 3000);

//express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다. :' + app.get('port'));
});


//라우팅 함수 등록
router.route('/process/idSearch').post();


// ===== Passport 초기화 ===== //
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

