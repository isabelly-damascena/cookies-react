import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './CookieFooter.css'


function App() {

  const [ cookies, setCookie, removeCokie ] = useCookies(['acceptedCookies']);

  const handleCookieButtonClick = () => {
    setCookie('acceptedCookies', true, { path: '/'})
  }


  return (
    <>
      <h2>Hello World!</h2>
      { cookies.acceptedCookies && <p>User accepted the cookie</p>}
      {!cookies.acceptedCookies && 
        <footer className='cookie-footer'>
          <p>Some text warning the user to accept the cookies.</p>
          <button onClick={handleCookieButtonClick} className='accept-button'>Accept Cookies</button>
       </footer>
      }
    </>
  );

}

export default App;
