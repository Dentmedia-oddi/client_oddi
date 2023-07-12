import { useState } from "react";
import "./buttonoptions.css";

export function Buttonoptions(props) {
  const [btnIsSelect, setBtnIsSelect] = useState(false);

	const handleClickbtnOptions = () => {
		setBtnIsSelect(!btnIsSelect)
		props.toHandle(props.value, !btnIsSelect);
	}
  return (
    <button
      className={`btnOptionsContainer
      ${btnIsSelect ? `btnSelected` : `btnNotSelect`}`}
			onClick={handleClickbtnOptions}
			value={props.id}
    >
      {props.option}
    </button>
  );
}
