import React, {Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css';



export default class LoginModal extends Component{
    

    render() {
      
        return (
          <Modal
            {...this.props}
            onHide={this.props.onHide}
            logfinished= {this.props.logfinished}
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
                  <Login onHide={this.props.onHide} logfinished={this.props.logfinished}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
}
