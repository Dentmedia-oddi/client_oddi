import { useState } from 'react'
import './ButtonToSelect.css'

export function ButtonToSelect ({name, id, onclick }) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick (e) {
        e.preventDefault();
        setIsClicked(!isClicked)
        onclick(id, !isClicked)
    }
    return (
        <>
            <button className={isClicked ? "btnContainerSelected" : "btnContainer"} 
            name={id} onClick={handleClick}>
                {name}
            </button>
        </>
    )
}

export function VitalityBtn ({name, id, id1, onclick }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);

    function handleClick (e) {
        e.preventDefault();
        setIsClicked(!isClicked)
        if (!isClicked1) return
        if (isClicked1) return setIsClicked1(!isClicked1)
    }
    function handleClick1 (e) {
        e.preventDefault();
        setIsClicked1(!isClicked1)
        if (!isClicked) return
        if (isClicked) return setIsClicked(!isClicked)
    }
    console.log(isClicked, isClicked1);

    return (
        <div className='btnVitalityContainer'>  
            <h1 className='secondTitle'>{name}</h1>
            <button className={isClicked ? "btnContainerVatalitySelected boldBtn" : "btnVitalityNotSelec"} 
            name={id} onClick={handleClick}> +
            </button>
            <button className={isClicked1 ? "btnContainerVatalitySelected boldBtn" : "btnVitalityNotSelec"} 
            name={id1} onClick={handleClick1}> -
            </button>
        </div>
    )
}