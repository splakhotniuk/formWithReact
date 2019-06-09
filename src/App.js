import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page.js'


function App() {
  
  const [pageNumber, setPagenumber] = useState(0);
  

  return (
  <div className="container" style={{width: '50%'}}>
      <div>
        <Page pageNum={pageNumber}> </Page>
      </div>
      <div>
      <button onClick={() => setPagenumber(pageNumber + 1)}>
        Далі
      </button>
    </div>
    <div>
      <button onClick={() => setPagenumber(pageNumber - 1)}>
        Назад
      </button>
    </div>
  </div>
        
  
  )
}

export default App;


