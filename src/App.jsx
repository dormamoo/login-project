// src/App.jsx
import React, { useState } from 'react';
import Login from './Login';

function App() {
  // 대장이 기억하는 상태: 로그인 했나요? (처음엔 false/아니요)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. 만약 로그인이 되어 있다면 -> 환영 메시지를 보여줘!
  if (isLoggedIn) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🎉 환영합니다!</h1>
        <p>로그인에 성공하셨군요.</p>
        {/* 로그아웃 버튼: 누르면 다시 상태를 false로 바꿈 */}
        <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      </div>
    );
  }

  // 2. 로그인이 안 되어 있다면 -> 로그인 페이지를 보여줘!
  // 핵심: Login 컴포넌트에게 "성공하면 이 함수를 실행해!"라고 도구(props)를 쥐여줍니다.
  return (
    <div>
      <Login onLoginSuccess={() => setIsLoggedIn(true)} />
    </div>
  );
}

export default App;