import { useEffect, useState } from "react"
import { FloatingLabelInput } from "../FloatingLabelsForm/FloatingLabel"
import './infopatient.css'

export function InfoPatient ({toHandle}) {
    const [infoPatient, setInfoPatient] = useState({})


    useEffect(() => {
        toHandle(infoPatient);
    }, [infoPatient, toHandle]);

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setInfoPatient(
            prevState => ({
                ...prevState,
                [name]: value
            }));
            toHandle(infoPatient)
    }
    return (
        <div className='infoContainer'>
            <FloatingLabelInput
                placeholder = "Paciente:"
                typeinput = 'text'
                nameinput = "nombrePaciente"
                handleChange = {handleInputChange}
            />
            <FloatingLabelInput
                placeholder = "Doctor:"
                typeinput = 'text'
                nameinput = "nombreDoctor"
                handleChange = {handleInputChange}
            /> 
            <div className="ageUdContainer">
                <FloatingLabelInput
                    placeholder = "Edad:"
                    typeinput = 'number'
                    nameinput = "edadPaciente"
                    handleChange = {handleInputChange}
            />
                <FloatingLabelInput
                    placeholder = "UD:"
                    typeinput = 'number'
                    nameinput = "UD"
                    handleChange = {handleInputChange}

                />
            </div>
            <FloatingLabelInput
                placeholder = "Motivo de consulta:"
                typeinput = 'text'
                nameinput = "consulta"
                handleChange = {handleInputChange}
            />
        </div>
    )
}