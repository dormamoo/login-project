// src/Login.jsx
import React, { useState } from 'react';
import './Login.css'; // 👈 [중요] 방금 만든 CSS 파일을 연결합니다!

function Login({ onLoginSuccess }) {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleLogin = () => {
    if (inputId === 'admin' && inputPw === '1234') {
      onLoginSuccess(); 
    } else {
      alert('아이디나 비밀번호가 틀렸습니다.');
    }
  };

  return (
    // style 대신 className을 사용합니다.
    <div className="login-container">
      
      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        
        <div className="input-group">
          <input 
            type="text" 
            className="input-field"
            value={inputId} 
            placeholder="아이디 (admin)"
            onChange={(e) => setInputId(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            className="input-field"
            value={inputPw} 
            placeholder="비밀번호 (1234)"
            onChange={(e) => setInputPw(e.target.value)} 
          />
        </div>

        <button 
          className="login-button"
          onClick={handleLogin}
        >
          로그인 하기
        </button>
      </div>
    </div>
  );
}

export default Login;