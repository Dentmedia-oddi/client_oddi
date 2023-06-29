import './studies.css'
import { useEffect, useState } from 'react';
import data from '../../../dataBtn.json'
import { ButtonToSelect } from '../ButtonToSelectForm/ButtonToSelect.jsx'

export function Studies () {

    const handleClickBtn = () => {

    }
    return (
        <div className='studiesContainer'>
            <h1 className='title'>Estudios: </h1>
            <div className='btnchildContainer'>
                {data.filter(btn => btn.type == "estudios").map(btn => (
                    <ButtonToSelect
                        key={btn.id}
                        name={btn.name}
                        id={btn.id}
                        onclick={handleClickBtn}
                    />
                ))}
            </div>
        </div>
    )
}