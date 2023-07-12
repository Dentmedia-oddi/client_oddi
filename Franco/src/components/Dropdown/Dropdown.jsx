import { useState } from "react";
import "./dropdown.css";
import Select from 'react-select'


// El objeto en props.data se espera de la siguiente forma: 
// {
//   "title": "Fractura",
//   "data": [
//       {
//           "name": "Vertical",
//           "id": "vertical",
//           "type": "fractura"
//       },
//       {
//           "name": "Horizontal",
//           "id": "horizontal",
//           "type": "fractura"
//       }
//   ]
// }


export function DropdownOptions(props) {
  const [opcionDropdown, setOpcionDropdown] = useState({});

  const options = props.data.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const handleClickDropdown = (selectedOption) => {
    setOpcionDropdown({
      Fractura: selectedOption.value
    });
    props.tohandle(selectedOption.value)
  };

  return (
    <div className="dropdownContainer">
      <Select options={options} styles={{
        control: (provided) => ({ ...provided, borderRadius: '50px'})
        }} 
        placeholder={props.labelDropdown} 
        className="selectContainer"
        onChange={handleClickDropdown}
      />
    </div>
  );
}
