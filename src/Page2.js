import React from 'react';

function Page2() {
    return (
        <div>
            <div className="form-group row">
            <label for="inputPassportSeries" class="col-sm-2 col-form-label">Паспорт:  Cерія</label>
            <div className="col-sm-1">
              <input type="text" class="form-control" id="inputPassportSeries" placeholder="АБ" required/>
            </div>
            <label for="inputPassportNumber" class="col-sm-1 col-form-label">Номер</label>
            <div className="col-sm-2">
              <input type="text" class="form-control" id="inputPassportNumber" placeholder="00000000" required/>
            </div>
            <label for="inputPassportDateOfIssue" class="col-sm-2 col-form-label">дата видачі</label>
            <div className="col-sm-4">
              <input type="date" class="form-control" id="inputPassportDateOfIssue" placeholder="" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassportIssuer" class="col-sm-3 col-form-label">Ким виданий</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputPassportIssuer" placeholder="" required/>
            </div>
          </div>
        </div>
    )
        
}

export default Page2;