import React, { useState } from 'react';

function Page3() {
  
  const [isINN, setINNRow] = useState(true);
    return (
        <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="isINN"/>
              <label className="form-check-label" for="isINN">
                Відмовився від ІНН
              </label>
           </div>
        </div>
    )
        
}

export default Page3;