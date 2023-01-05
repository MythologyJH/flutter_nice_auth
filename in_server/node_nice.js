...

router.get('/open', (req, res) => {
  
  ...
  
  redirect = req.query['redirect'];
   
  // 등록된 리다이렉트로만 처리가능하게 설정
  if(
      redirect == 'https://naver.com' ||
      redirect == 'https://google.com'
    ) {
      // 넘겨줄 값들
      // type : type에 따른 모바일 처리, 웹처리
      // redirect : 웹이 해당 기능 사용하지만 모바일은 등록한 도메인 값을 넣어도 무방
      res.render(nice_auth.ejs 경로, {sEncData , sRtnMSG, type, redirect});
    } else {
      res.status(400).send({
        'message': 'Domain Error'
      });
    }
  
});

...
