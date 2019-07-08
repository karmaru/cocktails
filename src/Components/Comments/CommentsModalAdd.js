import React, {Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import CommentAdd from '../CommentAdd/CommentAdd'
import 'bootstrap/dist/css/bootstrap.css';



export default class CommentsModalAdd extends Component{
  
    render() {
        return (
          <Modal
            {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                  <CommentAdd onHide={this.props.onHide} postFinished={this.props.postFinished} flipUpdate={this.props.flipUpdate}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
}