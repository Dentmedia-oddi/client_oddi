import { useState } from "react";
import "./buttonsvitalidad.css";

export function ButtonsVitalidad(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClickIsSelected = (e) => {
    const value = e.target.dataset.value;
    if (value === "true" && !isSelected) {
      setIsSelected(true);
      props.toHandle(props.value, value)
    } else if (value === "false" && isSelected) {
      setIsSelected(false);
      props.toHandle(props.value, value)
    }
  };
  return (
    <div className="buttonsVitalidadContainer">
      <h1 className="titleIsSelected">{props.name}</h1>
      <div className="btnsIsSelectedContainer">
        <i 
          className={isSelected? "bi bi-plus-circle-fill":"bi bi-plus-circle"}
          onClick={handleClickIsSelected}
          data-value="true"
          value={props.id}
          ></i>
        <i 
          className={isSelected? "bi bi-dash-circle":"bi bi-dash-circle-fill"}
          onClick={handleClickIsSelected}
          data-value="false"
          value={props.id}
          ></i>
      </div>
    </div>
  );
}
