// src/Login.jsx
import React, { useState } from 'react';

// App에서 보낸 도구(onLoginSuccess)를 받습니다.
function Login({ onLoginSuccess }) {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleLogin = () => {
    if (inputId === 'admin' && inputPw === '1234') {
      // alert('로그인 성공!');  <-- 이제 이건 필요 없어요
      
      // 대장이 준 도구 버튼을 누릅니다! (App의 isLoggedIn이 true로 변함)
      onLoginSuccess(); 
    } else {
      alert('아이디나 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>로그인 페이지</h1>
      <div>
        <label>ID : </label>
        <input 
          type="text" 
          value={inputId} 
          placeholder="admin"
          onChange={(e) => setInputId(e.target.value)} 
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>PW : </label>
        <input 
          type="password" 
          value={inputPw} 
          placeholder="1234"
          onChange={(e) => setInputPw(e.target.value)} 
        />
      </div>
      <button 
        style={{ marginTop: '20px', padding: '5px 15px' }}
        onClick={handleLogin}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;