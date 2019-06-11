import React from 'react';

function Namebirthgenpage(props) {
  
    return (
        <div>
        <h1>{props.surname}</h1>
            <div className="form-group row">
            <label for="inputSurname" class="col-sm-3 col-form-label">Прізвище</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputSurname" placeholder={props.surname} required value={props.surname} onChange={(event)=>{props.updateSurname(event.target.value)}}/>
            </div>
            
          </div>
          <div className="form-group row">
            <label for="inputName" class="col-sm-3 col-form-label">Ім'я</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputName" placeholder="Пeтро" required value={props.name} onChange={(event)=>{props.updateName(event.target.value)}}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPatronymic" class="col-sm-3 col-form-label">По батькові</label>
            <div className="col-sm-9">
              <input type="text" class="form-control" id="inputPatronymic" placeholder="Петрович" required value={props.patronymic} onChange={(event)=>{props.updatePatronymic(event.target.value)}}/>
            </div>
          </div>
          <div className="form-group row">
          <label for="inputBirthday" class="col-sm-2 col-form-label">Дата народження</label>
            <div className="col-sm-4">
              <input type="date" class="form-control" id="inputBirthday" placeholder="" value={props.birthday} required onChange={(event)=>{props.updateBirthday(event.target.value)}}/>
            </div>
          </div>
          <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Стать
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" value={props.gender} required onChange={(event)=>{props.gender(event.target.value)}}>
                <a className="dropdown-item" href="#">Чоловіча</a>
                <a className="dropdown-item" href="#">Жіноча</a>

              </div>
            </div>
        </div>
    )
        
}

export default Namebirthgenpage;