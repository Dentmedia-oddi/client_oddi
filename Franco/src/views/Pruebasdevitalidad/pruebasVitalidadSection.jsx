import "./pruebasvitalidadsection.css";
import { useEffect, useState } from "react";
import dataOptions from "../../dataBtn.json";
// Import Components
import { ButtonsVitalidad } from "../../components/ButtonsVitalidad/ButtonsVitalidad";
import { ButtonSwitch } from "../../components/ButtonSwitch/ButtonSwitch";
import { FloatingLabel } from "react-bootstrap";

export function PruebasVitalidadSection(props) {
	const [isOpen, setIsOpen] = useState(true)
	const [vitalidadInfo, setVitalidadInfo] = useState({})
	const HandleSwitchSection = (value) => {
		setIsOpen(value)
	}
	const handleBtnIsSelected = (name, value) => {
		setVitalidadInfo((prevInfo) => ({
			...prevInfo,
			[name]: value
		}));
	}
	useEffect(() => {
		props.toHandle(vitalidadInfo);
	}, [vitalidadInfo, props.toHandle]);
  return (
		<div className="pruebasVitalidadMainContainer">
			<div className="titleVitalidadContainer">
				<h1 className="titleVitalidad">Pruebas de Vitalidad</h1>
				<ButtonSwitch
					switchState = {true}
					toHandle= {HandleSwitchSection}
				/>
			</div>
				<div className={ isOpen ? "btnsVitalidadContainer" : "notShow"}>
				{dataOptions
          .filter((option) => option.type === "pruebasVitalidad")
          .map((opt) => (
            <ButtonsVitalidad 
              key={opt.id} 
              value={opt.id} 
              name={opt.name} 
              toHandle={handleBtnIsSelected}
              />
          ))
				}
				<FloatingLabel/>
				</div>
		</div>
		)
}
