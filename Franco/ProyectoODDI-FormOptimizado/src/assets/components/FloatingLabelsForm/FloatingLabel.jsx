import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './floatinglabel.css'

export function FloatingLabelInput(props) {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label={props.placeholder}
        className="mb-3"
      >
          <Form.Control 
          name={props.nameinput}
          type={props.typeinput} 
          placeholder="name@example.com" 
          onChange={props.handleChange}
          />
      </FloatingLabel>
    </>
  );
}
