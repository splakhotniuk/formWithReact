import React, { useState } from 'react';

import './App.css';
import Page from './Page.js'


function App() {
  
  
  const [pageNumber, setPagenumber] = useState(0);

 
  const changePagenumber = (diff) => {
    var nextPage = {pageNumber} + {diff};

    if ( {nextPage} >= 0|| {nextPage} <= 5 ) {
      setPagenumber({pageNumber} + {diff});
    }
  }
  

  return (
  <div className="container">
      <div>
        <Page pageNum={pageNumber}/> 
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
    <h1>{pageNumber}</h1>
  </div>
        
  
  )
}

export default App;


