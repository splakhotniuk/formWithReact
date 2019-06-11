import React, { useState } from 'react';
import Namebirthgenpage from './Namebirthgenpage.jsx'
import Passportpage from './Passportpage.jsx'
import Innpage from './Innpage.jsx'
import Adresspage from './Adresspage.jsx'
import Alldatapage from './Alldatapage.jsx'

function Page(props) {
     const [surname, setSurname] = useState("Sidorov");
     const [name, setName] = useState("Ivan");
     const [patronymic, setPatronymic] = useState("Petrovich");
     const [birthday, setBirthday] = useState();
     const [gender, setGender] = useState();
     const [passportSeries, setPassportSeries] = useState("AA");
     const [passportNumber, setPassportNumber] = useState("000000");
     const [passportDate, setPassportDate] = useState();
     const [passportIssuer, setPassportIssuer] = useState();
     const [isInn, setIsInn] = useState(true);
     const [inn, setInn] = useState();
     const [regAdress, setRegAdress] = useState();
     const [isLiveRegAdr, setIsLiveRegAdr] = useState(true);
     const [locAdress, setLockAdress] = useState();

    var pages = [<Namebirthgenpage surname={surname} updateSurname={anotheSurname=>setSurname(anotheSurname)} name={name} updateName={anotherName=>setName(anotherName)} patronymic={patronymic} updatePatronymic={anotherPatronymic=>setPatronymic(anotherPatronymic)} birthday={birthday} updateBirthday = {anotherBirthday=>setBirthday(anotherBirthday)} gender={gender} updateGender = {anotherGender=>setGender(anotherGender)}/>, 
        <Passportpage passportSeries={passportSeries} passportNumber={passportNumber} passportDate={passportDate} passportIssuer={passportIssuer} updatePassportSeries={anothePassportSeries=>setPassportSeries(anothePassportSeries)} updatePassportNumber={anothePassportNumber=>setPassportNumber(anothePassportNumber)}  updatePassportDate={anotherPassportDate=>setPassportDate(anotherPassportDate)} updatePassportIssuer={anothePassportIssuer=>setPassportIssuer(anothePassportIssuer)}/>, 
        <Innpage isInn={isInn} inn={inn} updateIsInn = {()=>setIsInn(!isInn)} updateInn = {anotherInn=>setInn(anotherInn)}/>,
        <Adresspage regAdress={regAdress} isLiveRegAdr={isLiveRegAdr} locAdress={locAdress} updateRegAdress={anotheRegAdress=>setRegAdress(anotheRegAdress)} updateIsLiveRegAdr={()=>setIsLiveRegAdr(!setIsLiveRegAdr)}/>, 
        <Alldatapage surname={surname} name={name} patronymic={patronymic} birthday={birthday} gender={gender} passportSeries={passportSeries} passportNumber={passportNumber} passportIssuer={passportIssuer} inn={inn}/>];
    
    return (
        <div>
         {pages[props.pageNum]}
         </div>
         
    )
}

export default Page;