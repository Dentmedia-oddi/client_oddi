import Accordion from 'react-bootstrap/Accordion';
import './accordion.css'
import { useState } from 'react';

export function AccordionConductos (props) {
  const [mecanicazada, setMecanizada] = useState({})
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.nroConducto}</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
