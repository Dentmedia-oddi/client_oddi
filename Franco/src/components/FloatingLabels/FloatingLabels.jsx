import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './floatinglabels.css'

export function FloatingLabels () {
  return (
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      > 
        <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  )
}