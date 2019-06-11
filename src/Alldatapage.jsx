import React from 'react';

function Alldatapage(props) {
  
  
    return (
        <div>
        <h4> Прізвище: {props.surname} </h4>
        <h4> Ім'я: {props.name} </h4>
        <h4> По батькові: {props.patronymic} </h4>
        <h4> Дата народження: {props.birthday} </h4>
        <h4> Стать: {props.gender} </h4>
        <h4> Паспорт: </h4>
        <h4> Серія: {props.passportSeries} </h4>
        <h4> Номер: {props.passportNumber} </h4>
        <h4> Ким виданий: {props.passportIssuer} </h4>
        <h4> ІПН: {props.inn} </h4>
       
        </div>   
    )
        
}

export default Alldatapage;