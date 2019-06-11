import React from 'react';

function Passportpage(props) {
    return (
        <div>
            <div className="form-group row">
            <label for="inputPassportSeries" class="col-sm-4 col-form-label">Паспорт:  Cерія</label>
            <div className="col-sm-1">
              <input type="text" class="form-control" id="inputPassportSeries" placeholder="АБ" required value={props.passportSeries} onChange={(event)=>{props.updatePassportSerries(event.target.value)}}/>
            </div>
            <label for="inputPassportNumber" class="col-sm-1 col-form-label">Номер</label>
            <div className="col-sm-2">
              <input type="text" class="form-control" id="inputPassportNumber" placeholder="00000000" required value={props.passportNumber} onChange={(event)=>{props.updatePassportNumber(event.target.value)}}/>
            </div>
            <label for="inputPassportDateOfIssue" class="col-sm-2 col-form-label">дата видачі</label>
            <div className="col-sm-4">
              <input type="date" class="form-control" id="inputPassportDateOfIssue" placeholder="" required value={props.passportDate} onChange={(event)=>{props.updatePassportDate(event.target.value)}}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassportIssuer" class="col-sm-3 col-form-label">Ким виданий</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputPassportIssuer" placeholder="" required value={props.passportIssuer} onChange={(event)=>{props.updatePassportIssuer(event.target.value)}}/>
            </div>
          </div>
        </div>
    )
        
}

export default Passportpage;