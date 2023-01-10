import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./modal.css";
import CloseButton from 'react-bootstrap/CloseButton';
import validator from 'validator'

// CONTROLE DE SAISIE SUR L'URL

// *****************************


export default class ModalBox extends Component {

  render() {
    const {classProp, closeButton, clicked, save, valuePropName, valuePropLink, onChangeName, onChangeLink, requireName} = this.props;
    
    return <div
      className={classProp}
      style={{ display: 'block', position: 'initial' }}
      >
      <Form onSubmit={save}> 
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>New Book mark</Modal.Title>
              <CloseButton type='button' id={closeButton} onClick={clicked}/>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={valuePropName}
                      onChange={onChangeName}
                    />
              </InputGroup>  
                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control ref= {this.myRef} pattern="https://www.+" type="url" id="basic-url" aria-describedby="basic-addon3" value={valuePropLink}
                      onChange={onChangeLink} />
              </InputGroup>
              <Button disabled={requireName} type="submit">Save</Button>
            </Modal.Body>
          </Modal.Dialog>   
      </Form>
    </div>
  }
}


// defaultValue="https://www."