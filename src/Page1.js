import React from 'react';

function Page1() {
    return (
        <div>
            <div className="form-group row">
            <label for="inputSurname" class="col-sm-3 col-form-label">Прізвище</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputSurname" placeholder="Петренко" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputName" class="col-sm-3 col-form-label">Ім'я</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputName" placeholder="Пeтро" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPatronymic" class="col-sm-3 col-form-label">По батькові</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputPatronymic" placeholder="Петрович" required/>
            </div>
          </div>
          <div className="form-group row">
          <label for="inputBirthday" class="col-sm-2 col-form-label">Дата народження</label>
            <div className="col-sm-4">
              <input type="date" class="form-control" id="inputBirthday" placeholder="" required/>
            </div>
          </div>
          <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Стать
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Чоловіча</a>
                <a className="dropdown-item" href="#">Жіноча</a>
              </div>
            </div>
        </div>
    )
        
}

export default Page1;