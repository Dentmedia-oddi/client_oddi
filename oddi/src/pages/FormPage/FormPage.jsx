import { useState } from "react";
import "./formpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboardCopy from 'clipboard-copy';
import textToCopy from '../../textToCopy'

import { DatosPaciente } from "../../views/DatosPaciente/Datospaciente";
import { Evaluacion } from "../../views/Evaluacion/Evaluacion";
import { Dolor } from "../../views/Dolor/Dolor";
import { Estudios } from "../../views/Estudios/Estudios";
import { PruebasVitalidadSection } from "../../views/Pruebasdevitalidad/pruebasVitalidadSection";
import { Diagnostico } from "../../views/Diagnostico/Diagnostico";
import { Medicacion } from "../../views/Medicacion/Medicacion";
import Observaciones from "../../views/Observaciones/Observaciones";


function FormPage() {

  const [datosPaciente, setDatosPaciente] = useState({});
  const [evaluacionPaciente, setEvaluacionPaciente] = useState({});
  const [dolorPaciente, setDolorPaciente] = useState({});
  const [estudiosPaciente, setEstudiosPaciente] = useState({});
  const [vitalidadPaciente, setVitalidadPaciente] = useState({});
  const [diagnosticoPaciente, setDiagnosticoPaciente] = useState({});
  const [medicacionPaciente, setMedicacionPaciente] = useState({});
  const [conductosPaciente, setConductosPaciente] = useState({});
  const [observacionesPaciente, setObservacionesPaciente] = useState({});
  
  const handlesDatosPacienteMain = (datos) => {
    setDatosPaciente(datos);
  }
  const handlesEvaluacionPacienteMain = (datos) => {
    setEvaluacionPaciente(datos);
  }
  const handleDolorPacienteMain = (datos) => {
    setDolorPaciente(datos);
  }
  const handleEstudiosPacienteMain = (datos) => {
    setEstudiosPaciente(datos);
  }
  const handleVitalidadPacienteMain = (datos) => {
    setVitalidadPaciente(datos);
  }
  const handleDiagnosticoPacienteMain = (datos) => {
    setDiagnosticoPaciente(datos);
  }
  const handleMedicacionPacienteMain = (datos) => {
    setMedicacionPaciente(datos);
  }
  const handleObservacionesPacienteMain = (name, value) => {
    setObservacionesPaciente({
      ...observacionesPaciente,
      [name]: value,
    });
  }

  const handleDiagnosticoConductosPacienteMain = (name, value, conductoNro) => {
    setConductosPaciente((prevConductosPaciente) => ({
      ...prevConductosPaciente,
      [conductoNro]: {
        ...prevConductosPaciente[conductoNro],
        [name]: value,
      },
    }));
  }

  // console.log(datosPaciente, 
  //   evaluacionPaciente, 
  //   dolorPaciente, 
  //   estudiosPaciente, 
  //   vitalidadPaciente, 
  //   diagnosticoPaciente, 
  //   conductosPaciente,
  //   medicacionPaciente, 
  //   observacionesPaciente);
  console.log( 
    medicacionPaciente);
    
    const handleCopy = (e) => {
      e.preventDefault();
      clipboardCopy(textToCopy(datosPaciente, evaluacionPaciente, dolorPaciente, estudiosPaciente, vitalidadPaciente, diagnosticoPaciente, conductosPaciente, medicacionPaciente, observacionesPaciente));
    };

    const cleanFields = () => {
      window.location.reload();
    }

  return (
    <div className="appMainContainer">
      <div className="optionsContainerApp">
      <DatosPaciente
        switch={true}
        tohandle={handlesDatosPacienteMain}
      />
      <hr />
      <Evaluacion
        switch={true}
        tohandle={handlesEvaluacionPacienteMain}
      />
      <hr />
      <Dolor
        switch={false}
        tohandle = {handleDolorPacienteMain}
      />
      <hr />
      <Estudios
        switch={false}
        tohandle = {handleEstudiosPacienteMain}
        />
      <hr />
      <PruebasVitalidadSection
        switch={false}
        toHandle={handleVitalidadPacienteMain}
      />
      <hr />
      <Diagnostico
        switch={true}
        tohandle = {handleDiagnosticoPacienteMain}
        tohandleConductos = {handleDiagnosticoConductosPacienteMain}
      />
      <hr />
      <Medicacion
        switch={false}
        tohandle={handleMedicacionPacienteMain}
      />
      <hr />
      <Observaciones
        switch={false}
        tohandle={handleObservacionesPacienteMain}
      />
      <hr />
      <div className="btnCopiarConsultaContainer">
        <button className="btnLimpiarCampos" type='submit' onClick={cleanFields}>Limpiar campos</button>
        <button className="btnCopiarConsulta" type='submit' onClick={handleCopy}>Copiar consulta</button>
      </div>
      </div>
      
    </div>
  );
}

export default FormPage;