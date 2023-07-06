import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import data from './dataBtn.json'

import { InfoPatient } from './assets/components/InfoPatient/InfoPatient';
import { BtnOnOff } from './assets/helpers/btnON-OFF/btnOnOff';
import { Dropdownbtn } from './assets/helpers/dropdownbtn/Dropdownbtn';

function App() {
    const [infoPatientToShow, setInfoPatientToShow] = useState("");
    const handleInfoPatient = (infoPatient) => {
        setInfoPatientToShow(infoPatient)
        console.log(infoPatientToShow);
    }
    console.log(data.find(item => item.title == "Fractura"));
    return (
        <>
            <InfoPatient 
                toHandle={handleInfoPatient}
            />
            <BtnOnOff/>
            <Dropdownbtn
                options={data.find(item => item.title == "Fractura")}
            />
        </>
    )
}

export default App
