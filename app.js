var express=require('express'), http = require('http');

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
router.route('/process/register').post();

router.route('/process/login').post();
router.route('/process/reserve/O').post();
router.route('/process/reserve/I').post();
router.route('/process/delegate/O').post();
router.route('/process/delegate/I').post();

//hello

// this is 자현 방가방가

/////this is 나현현