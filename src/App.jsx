// App.jsx
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css'

const App = () => {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/*' element={<Users/> }/>
  //     </Routes>
  //   </BrowserRouter>
  // );
  const [display, setDisplay] = useState(true);

  return (
    <BrowserRouter>
      <nav style={{ fontSize: '30px', backgroundColor: '#2A303C', padding: '20px 10px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="page1" style={{  marginRight: '20px', textDecoration: 'none', color: 'white'}} onClick={() => setDisplay(false)}>Page 1</Link>
          <span style={{ marginRight: '20px', color: 'white'}}>|</span>
          <Link to="page2" style={{  marginRight: '20px', textDecoration: 'none', color: 'white'}} onClick={() => setDisplay(false)}>Page 2</Link>
        </div>
        <div style={{  marginRight: '10px'}}>
          <a href="https://mermaid.js.org/intro/getting-started.html" style={{ textDecoration: 'none', color: 'white' }} target="_blank">Mermaid Doc.</a>
        </div>
      </nav>

      {
        display? 
        <>
          <div style={{ margin: '20px 0 0 20px' }} className='btn'>
            <p style={{ fontSize: '40px' }} className='words'> Welcome..! </p>
          </div>
        </> : ''
      }
      <div style={{ margin: '15px 0 0 10px'}}>
        <Routes>
          <Route path='/page1' element={<Page1/>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

function Users() {
  return (
    <div>
      <nav>
        <Link to="page1" style={{  marginRight: '20px'}}>Page 1</Link>
        <Link to="page2">Page 2</Link>
      </nav>

      <Routes>
        <Route path='page1' element={<Page1/>} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
