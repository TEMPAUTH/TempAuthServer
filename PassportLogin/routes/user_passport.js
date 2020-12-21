module.exports = function(router, passport){
    console.log('user_passport 호출됨.');


    // 패스포트 - 페이스북 인증 라우팅
    router.route('auth/facebook').get(passport.authenticate('facebook', {
        scope : 'email'
    }));

    // 패스포트 - 페이스북 인증 콜백 라우팅
    router.route('/auth/facebook/callback').get(passport.authenticate('facebook',{
        successRedirect : '/profile',
        failureRedirect : '/'
    }));
}