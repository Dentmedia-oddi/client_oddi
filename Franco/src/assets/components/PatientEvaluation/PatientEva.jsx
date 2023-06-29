import { ButtonToSelect } from '../ButtonToSelectForm/ButtonToSelect.jsx'
import data from '../../../dataBtn.json'
import { useEffect, useState } from 'react';
import './patienteva.css'


export function PatientEva ({toHandleBtnEva}) {
    const [btnClicked, setBtnClicked] = useState({});
    
    useEffect(() => {
        toHandleBtnEva(btnClicked);
    }, [btnClicked, toHandleBtnEva]);
    
    const handleClickBtn = (id, isClicked) => {
        setBtnClicked((prevState) => ({
            ...prevState,
            [id]: isClicked,
        }));
    };
    return (
        <div className='EvaContainer'>
            <h1 className='title'>Evaluacion</h1>
            <div className='btnchildContainer'>
                {data.filter(btn => btn.type == "eva").map(btn => (
                    <ButtonToSelect
                        key={btn.id}
                        name={btn.name}
                        id={btn.id}
                        onclick={handleClickBtn}
                    />
                ))}
            </div>
            <div className='childContainer'>
                <h1 className='secondTitle'>Fractura</h1>
                <div className='btnchildContainer'>
                    {data.filter(btn => btn.type == "fractura").map(btn => (
                    <ButtonToSelect
                        key={btn.id}
                        name={btn.name}
                        id={btn.id}
                        onclick={handleClickBtn}
                    />
                    ))}
                </div>
            </div>
            <div className='childContainer'>
                <h1 className='secondTitle'>Reabsorcion</h1>
                <div className='btnchildContainer'>
                    {data.filter(btn => btn.type == "reabsorcion").map(btn => (
                        <ButtonToSelect
                            key={btn.id}
                            name={btn.name}
                            id={btn.id}
                            onclick={handleClickBtn}
                        />
                    ))}
                </div>
                </div>
            <div className='childContainer'>
                <h1 className='secondTitle'>Movilidad</h1>
                <div className='btnchildContainer'>
                    {data.filter(btn => btn.type == "movilidad").map(btn => (
                        <ButtonToSelect
                            key={btn.id}
                            name={btn.name}
                            id={btn.id}
                            onclick={handleClickBtn}
                        />
                    ))}
                </div>
            </div>
            <div className='childContainer'>
                <h1 className='secondTitle'>Reendodoncia</h1>
                <div className='btnchildContainer'>
                    {data.filter(btn => btn.type == "reendodoncia").map(btn => (
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
    )
}