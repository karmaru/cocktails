import React, {Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.css';



export default class RegisterModal extends Component{
  
    render() {
        return (
          <Modal
            // {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                  <Register onHide={this.props.onHide} logfinishedReg={this.props.logfinishedReg}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
}