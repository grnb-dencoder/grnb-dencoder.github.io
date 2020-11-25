import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, Row} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {BsFileText, BsLockFill, BsUnlockFill} from "react-icons/bs";

const DencodeForm = (props) => {

  const {uri, maxLength, submitButtonLabel, setShouldDecodeMessage} = props
  const [secret, setSecret] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (secret && message) {
      fetch(uri, {
        method: 'post',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          secret,
          message
        })
      })
        .then(r => r.text())
        .then(result => {
          setResponse(result)
          setLoading(false)
        })
        .catch(console.error)
    }
  }

  const handleClickOnResultTextarea = ({target}) => {
    console.debug(target.value)
    target.select()
    document.execCommand('copy');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="w-100">
              <h4>
                <BsFileText/> Place your message here
              </h4>
            </Form.Label>
            <Form.Control as="textarea"
                          rows={20}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          maxLength={maxLength}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label className="w-100">
              <h4>
                <BsFileText/> Result
              </h4>
            </Form.Label>
            <Form.Control as="textarea"
                          rows={20}
                          value={response}
                          onClick={handleClickOnResultTextarea}
                          readOnly
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            required
            size="lg"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter secret"/>
        </Col>
        <Col>
          <Dropdown as={ButtonGroup}
                    className="w-100">
            <Button className="w-75"
                    size="lg"
                    type="submit"
                    disabled={isLoading}
                    variant="success"
            >
              {isLoading ? 'Loading...' : submitButtonLabel}
            </Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setShouldDecodeMessage(false)}>
                <BsLockFill/> Encode message
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setShouldDecodeMessage(true)}>
                <BsUnlockFill/> Decode message
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Form>
  )
}

DencodeForm.propTypes = {
  uri: PropTypes.string,
  title: PropTypes.string,
  submitButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  maxLength: PropTypes.number,
  setShouldDecodeMessage: PropTypes.func,
}

DencodeForm.defaultProps = {
  maxLength: 1000,
  submitButtonLabel: 'Submit',
  setShouldDecodeMessage: () => {
  }
}

export default DencodeForm

