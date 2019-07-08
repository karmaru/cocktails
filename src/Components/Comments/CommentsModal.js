import React, {Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import CommentsUpdate from '../CommentUpdate/CommentsUpdate'
import 'bootstrap/dist/css/bootstrap.css';



export default class CommentsModal extends Component{

    render() {
        // console.log('props from comments modal', this.props)
        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Comments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                  <CommentsUpdate onHide={this.props.onHide} logFinished={this.props.logFinished} userId={this.props.userId} postId={this.props.postId} drinkId={this.props.drinkId} newComment={this.props.comment} flipUpdate={this.props.flipUpdate} delete={this.props.delete}/>
                  {/* {console.log('child',  this.child)} */}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
}