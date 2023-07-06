import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css'
import { useState } from 'react';


export function Dropdownbtn({ options }) {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionSelect = (option) => {
        const updatedOptions = { ...selectedOptions };
        updatedOptions[option.id] = !selectedOptions[option.id];
        setSelectedOptions(updatedOptions);
    };

    const isOptionSelected = (option) => {
        return selectedOptions[option.id] === true;
    };

    return (
        <div className="dropdownContainer">
            <h1>{options.title}:</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='btnDropdown'>
                    {selectedOptions[options.data[0]?.id] ? options.data.find(option => selectedOptions[option.id])?.name : "Seleccionar"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {options.data.map((option) => (
                        <Dropdown.Item
                            key={option.id}
                            onClick={() => handleOptionSelect(option)}
                            active={isOptionSelected(option)}
                        >
                            {option.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
        </div>
    );
}