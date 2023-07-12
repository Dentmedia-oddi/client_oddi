import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import dataOptions from "./dataBtn.json";
import { Buttonoptions } from "./components/Button/Buttonoptions";
import { ButtonSwitch } from "./components/ButtonSwitch/ButtonSwitch";
import { DropdownOptions } from "./components/Dropdown/Dropdown";
import { AccordionConductos } from "./components/Accordion/Accordion";
import { ButtonsVitalidad } from "./components/ButtonsVitalidad/ButtonsVitalidad";

// Empezar a crear la carpeta views para empezar a desarrollar el form con los componentes

function App() {
  const [fractura, setFractura] = useState({});
  const [evaluacion, setEvaluacion] = useState({})

  const handleFracturaOptions = (selectedOption) => {
    setFractura({fractura: selectedOption});
  };

  const handleBtnEvaluacion = (value, btnIsSelect) => {
    setEvaluacion((prevEvaluacion) => ({
      ...prevEvaluacion,
      [value]: btnIsSelect
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fractura, evaluacion);
  }
  const handleBtnIsSelected = (id, value) => {
    console.log(id, value);
  }
  return (
    <div className="appMainContainer">
      <ButtonSwitch
        switchState={false}
      />
      <form action="" onSubmit={handleSubmit}>
        <DropdownOptions
          labelDropdown={
            dataOptions.find((item) => item.title === "Fractura").title
          }
          data={dataOptions.find((item) => item.title === "Fractura").data}
          tohandle={handleFracturaOptions}
        />
        {dataOptions
          .filter((option) => option.type === "evaluacion")
          .map((opt) => (
            <Buttonoptions 
              key={opt.id} 
              value={opt.id} 
              option={opt.name} 
              toHandle={handleBtnEvaluacion}
              />
          ))}
        <button type="submit">Enviar y guardar</button>
      </form>
      <AccordionConductos/>
      {dataOptions
          .filter((option) => option.type === "pruebasVitalidad")
          .map((opt) => (
            <ButtonsVitalidad 
              key={opt.id} 
              value={opt.id} 
              name={opt.name} 
              toHandle={handleBtnIsSelected}
              />
          ))}
    </div>
  );
}

export default App;