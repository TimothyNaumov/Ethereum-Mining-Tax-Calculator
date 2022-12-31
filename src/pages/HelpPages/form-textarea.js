// Import memo and useCallback hooks:
import { memo, useCallback } from 'react'
import Form from 'react-bootstrap/Form';

// Create the Field component:
export const TextArea = memo((props) => {
  // Create handler for change event:
  const onFieldChange = useCallback(
    (event) => {
      props.onFieldChange(props.fieldName, event.target.value)
    },
    [props.onFieldChange, props.fieldName]
  )

  // Render all HTML components:
  return (
    <>
        <Form.Group className="mb-3" controlId={props.fieldName}>
            <Form.Label style={{fontSize: "20px"}}>{props.labelText}</Form.Label>
            <textarea className='form-control' rows="3" onChange={onFieldChange} value={props.fieldValue}></textarea>
            {props.hasError && (
              <p style={{color:'red', fontSize: "12px"}}>{`Please enter a message`}</p>
            )}
        </Form.Group>
    </>
  )
})