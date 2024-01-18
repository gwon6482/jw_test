var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 0 또는 1의 랜덤 값을 생성
  const randomNumber = Math.random();
  
  // 50% 확률로 www.google.com으로 리디렉션
  if (randomNumber < 0.5) {
    res.redirect('http://www.google.com');
  } else {
    // 나머지 50% 확률로 www.naver.com으로 리디렉션
    res.redirect('http://www.naver.com');
  }
});

module.exports = router;
