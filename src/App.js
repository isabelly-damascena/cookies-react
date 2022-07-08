import './CookieFooter.css'


function CookieFooter() {
  return (
    <footer className='cookie-footer'>
     <p>Some text warning the user to accept the cookies.</p>
     <button onClick={(e) => console.log("Hi")} className='accept-button'>Accept Cookies</button>
    </footer>
  );
}


function App() {
  return (
    <>
      <p>Hello World!</p>
      <CookieFooter/>
    </>
  );

}

export default App;
