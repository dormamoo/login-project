// src/App.jsx
import React, { useState } from 'react';
import Login from './Login';
import './App.css'; // 웹사이트 전체 스타일(헤더, 푸터 등)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="web-container">
      {/* 1. 웹사이트 헤더 (상단 메뉴바) */}
      <header className="web-header">
        <div className="logo">Git Version Website</div>
        <nav className="nav-menu">
          <span>홈</span>
          <span>소개</span>
          <span>게시판</span>
        </nav>
      </header>

      {/* 2. 본문 영역 (여기에 로그인 창이나 콘텐츠가 들어감) */}
      <main className="web-main">
        {isLoggedIn ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>🎉 환영합니다!</h1>
            <p>이제 웹사이트의 모든 기능을 이용할 수 있습니다.</p>
            <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          </div>
        ) : (
          /* 로그인 컴포넌트를 보여줍니다 */
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </main>

      {/* 3. 웹사이트 푸터 (하단 정보) */}
      <footer className="web-footer">
        <p>Copyright © 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
