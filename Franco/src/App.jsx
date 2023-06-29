import './App.css'
import { useState } from 'react';
import imgOddi from '../src/assets/img/white iso 3.png'
import clipboardCopy from 'clipboard-copy';
import { TextToCopy } from './assets/Helpers/Texttocopy'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import { InfoPatient } from './assets/components/InfoPatient/InfoPatient.jsx';
import { PatientEva } from './assets/components/PatientEvaluation/PatientEva.jsx';
import { PainSection } from './assets/components/PainSection/PainSection.jsx';
import { VitalityTest } from './assets/components/VitalityTest/VitalityTest.jsx';
import { Studies } from './assets/components/Studies/Studies.jsx';



function App() {

    const [infoPatientToShow, setInfoPatientToShow] = useState("");
    const [btnsEva, setBtnEva] = useState("");
    const [btnsPain, setBtnPain] = useState("");
    


    
    const handleInfoPatient = (infoPatient) => {
        setInfoPatientToShow(infoPatient)
    }

    const handleBtnEva = (btnClicked) => {
        setBtnEva(btnClicked)
    }
    const handleBtnPain = (btnClicked) => {
        setBtnPain(btnClicked)
    }
    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(btnsEva, infoPatientToShow, btnsPain);
        clipboardCopy(TextToCopy(btnsEva, infoPatientToShow, btnsPain))
    }
    return (
    <>
        <img src={imgOddi} alt="" />
        <form>
            <InfoPatient 
                toHandle={handleInfoPatient}
            />
            <PatientEva
                toHandleBtnEva={handleBtnEva}
            />
            <PainSection
                toHandleBtnPain={handleBtnPain}
            />
            <Studies/>
            <VitalityTest/>
            <button className='btnSaveAndCopy' type='submit' onClick={handleSubmit}>Guardar y copiar</button>
        </form>
    </>
    );
}

export default App;
