const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 3000;

const secretKey = process.env.jwt_secret_key || 'SECRET_KEY'; // 이 키는 숨겨야 합니다. 지금은 뭐 숨길게 없으니 아무거나 지정

// 예시로 든 회원 정보
const id = "hyojun";
const pw = "qwe123";

// JWT 생성
app.get('/login', (req, res) => {

  const payload = {
    id: id, // 로그인 할떄 필요한 아이디이다. 토큰은 중간에 가로챌 위험성이 있음 그래서 pw는 포함 X
    role: "user", // 로그인 할떄 사용자의 역할 같은 것 (admin, user 등등)
  };

  //원래는 DB로 아이디와 비밀번호에 맞는 유저가 있는지 확인 후 토큰을 생성함
  // 토큰 생성
  const token = jwt.sign(
    payload, secretKey, {
        expiresIn: '15m', // 토큰 유효기간 15분
    });

  res.send(token); // 보톤 세션이나 쿠키에 저장
});

// JWT 검증
app.get('/verify', (req, res) => {
  const token = ""; // 원래는 세션이나 쿠키에서 가져옴

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(500).send( { err: err } );
    }
    console.log(decoded)
    res.send(decoded);
  });
});




app.listen(port, () => {
    console.log(`PORT: ${port} START!`);
});