import React, { memo } from 'react';

const Header = memo(({ username, onLogout, onMyTweets, onAllTweets }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo.png' alt='Dwitter Logo' className='logo-img' />
        <h1 className='logo-name'>DayTalk</h1>
        {username && <span className='logo-user'>@{username}</span>}
      </div>
      {username && (
        <nav className='menu'>
          <button onClick={onAllTweets}>All Talks</button>
          <button onClick={onMyTweets}>My Talks</button>
          <button className='menu-item' onClick={onLogout}>
            Logout
          </button>
        </nav>
      )}
    </header>
  );
});

export default Header;
