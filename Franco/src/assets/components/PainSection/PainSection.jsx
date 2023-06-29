import Form from 'react-bootstrap/Form';
import './painsection.css'
import { useEffect, useState } from 'react';
import data from '../../../dataBtn.json'
import { ButtonToSelect } from '../ButtonToSelectForm/ButtonToSelect.jsx'

export function PainSection ({toHandleBtnPain}) {
    const [isChecked, setIsChecked] = useState(false);
    const [btnClicked, setBtnClicked] = useState({});

    const handleSwitch = (e) => {
        setIsChecked(e.target.checked);
        console.log(isChecked);
    }
    
    useEffect(() => {
        toHandleBtnPain(btnClicked);
    }, [btnClicked, toHandleBtnPain]);
    
    const handleClickBtn = (id, isClicked) => {
        setBtnClicked((prevState) => ({
            ...prevState,
            [id]: isClicked,
        }));
    };
    return (
        <div className="painSectionContainer">
            <div className='painContainer'>
                <div className='btnPainContainer'>
                    <h1 className='title'>Dolor:</h1>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={isChecked}
                        onChange={handleSwitch}
                        className='btnSwitch'
                    />
                </div>
                <div className={isChecked? "btnPainContainerShow" : "btnPainContainerHidden"} >
                    <div className="childContainer">
                        <h1 className='secondTitle'>Tipo:</h1>
                        <div className='btnchildContainer'>
                            {data.filter(btn => btn.type == "dolorTipo").map(btn => (
                                <ButtonToSelect
                                    key={btn.id}
                                    name={btn.name}
                                    id={btn.id}
                                    onclick={handleClickBtn}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="childContainer">
                        <h1 className='secondTitle'>Estimulado Por:</h1>
                        <div className='btnchildContainer'>
                            {data.filter(btn => btn.type == "dolorEstimulado").map(btn => (
                                <ButtonToSelect
                                    key={btn.id}
                                    name={btn.name}
                                    id={btn.id}
                                    onclick={handleClickBtn}
                                />
                            ))}
                        </div>

                    </div>

                    <div className="childContainer">

                        <h1 className='secondTitle'>Intensidad:</h1>
                        <div className='btnchildContainer'>
                            {data.filter(btn => btn.type == "dolorIntencidad").map(btn => (
                                <ButtonToSelect
                                    key={btn.id}
                                    name={btn.name}
                                    id={btn.id}
                                    onclick={handleClickBtn}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}