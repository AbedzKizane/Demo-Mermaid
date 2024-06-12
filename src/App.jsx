// App.jsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/*' element={<Users/> }/>
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <BrowserRouter>
      <nav style={{ fontSize: '30px', backgroundColor: '#2A303C', padding: '20px 10px' }}>
        <Link to="page1" style={{  marginRight: '20px', textDecoration: 'none', color: 'white'}}>Page 1</Link>
        <span style={{ marginRight: '20px', color: 'white'}}>|</span>
        <Link to="page2" style={{  marginRight: '20px', textDecoration: 'none', color: 'white'}}>Page 2</Link>
      </nav>

      <div style={{ margin: '15px 0 0 10px'}}>
        <Routes>
          <Route path='page1' element={<Page1/>} />
          <Route path="page2" element={<Page2 />} />
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
