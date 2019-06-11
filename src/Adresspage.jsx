import React from 'react';

function Adresspage(props) {
  return (
        <div>
        <div className="form-group row">
            <label for="inputRegAdress" class="col-sm-3 col-form-label">Місце реєєстрації</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputRegAdress" placeholder={props.regAdress} required value={props.regAdress} onChange={(event)=>{props.updateRegAdress(event.target.value)}}/>
            </div>
           </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"  value="" id="isLiveRegAdr" onChange={(event)=>{props.updateIsInn()}}/>
              <label className="form-check-label" for="isLiveRegAdr">
                Проживає за місцем реєєстрації (ПОКА НЕ ОТМЕЧАТЬ!!!)
              </label>
            </div>
              
        </div>
    )
}
  

export default Adresspage;