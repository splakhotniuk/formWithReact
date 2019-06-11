import React from 'react';

function Innpage(props) {
  var lab;
  if (props.isInn) {
    return (
        <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="is" value="" id="isINN" onChange={(event)=>{props.updateIsInn()}}/>
              <label className="form-check-label" for="isINN">
                Відмовився від ІПН
              </label>
            </div>
              <div className="form-group row">
            <label for="inputInn" class="col-sm-3 col-form-label">ІПН</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputInn" placeholder={props.inn} required value={props.inn} onChange={(event)=>{props.updateInn(event.target.value)}}/>
            </div>

           </div>
           
        </div>
    )
  } else {
    return (
      <div className="form-check">
          <input className="form-check-input" type="checkbox" name="is" value="" chacked id="isINN" onChange={(event)=>{props.updateIsInn()}}/>
          <label className="form-check-label" for="isINN">
            Відмовився від ІПН
          </label>
      </div>
    )
  }
  

    
        
}

export default Innpage;