import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, Row} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {BsLockFill} from "react-icons/bs";
import Container from "react-bootstrap/Container";
import {BsUnlockFill} from "react-icons/all";

const DencodeForm = (props) => {

  const {uri, maxLength, submitButtonLabel, setShouldDecodeMessage} = props
  const [secret, setSecret] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (secret && message) {
      setLoading(true)

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
    target.select()
    document.execCommand('copy');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container fluid className="pt-3 pb-3">
        <Row>
          <Col sm={12} md={6}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="w-100">
                <h2>
                  Initial message
                </h2>
              </Form.Label>
              <Form.Control as="textarea"
                            rows={16}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={maxLength}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label className="w-100">
                <h2>
                  Result message
                </h2>
              </Form.Label>
              <Form.Control as="textarea"
                            rows={16}
                            value={response}
                            onClick={handleClickOnResultTextarea}
                            readOnly
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="mb-3">
            <Form.Control
              required
              size="lg"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter a secret phrase"/>
          </Col>
          <Col sm={12} md={6}>
            <Dropdown as={ButtonGroup}
                      className="w-100">
              <Button className="w-75"
                      size="lg"
                      type="submit"
                      disabled={isLoading}
                      variant="info"
              >
                {isLoading ? 'Loading...' : submitButtonLabel}
              </Button>

              <Dropdown.Toggle style={{maxWidth: '3rem'}}
                               split
                               variant="info"/>

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
      </Container>
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

