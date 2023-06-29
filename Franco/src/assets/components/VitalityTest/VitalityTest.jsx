import './vitalitytest.css'
import { useEffect, useState } from 'react';
import data from '../../../dataBtn.json'
import { VitalityBtn } from '../ButtonToSelectForm/ButtonToSelect.jsx'


export function VitalityTest () {
    return (
        <div className='vitalityTestContainer'>
                <h1 className='title'>Pruebas de vitalidad:</h1>
            <div className="childContainer">
                <div className='btnchildContainer'>
                    {data.filter(btn => btn.type == "pruebasVitalidad").map(btn => (
                        <VitalityBtn
                            key={btn.id}
                            name={btn.name}
                            id={btn.id}
                            id1= {btn.id1}
                            // onclick={handleClickBtn}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}