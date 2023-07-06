import Form from 'react-bootstrap/Form';
import './btnonoff.css'
import { useState } from 'react';

export function BtnOnOff () {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitch = (e) => {
        setIsChecked(e.target.checked);
    }
    return (
        <div className='btnOnOff'>
            <Form.Check
                type="switch"
                id="custom-switch"
                checked={isChecked}
                onChange={handleSwitch}
                className='btnSwitch'
            />
        </div>
    )
}   