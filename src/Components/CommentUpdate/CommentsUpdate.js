import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";
import {withRouter} from 'react-router-dom'

class CommentsUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      userId: '',
      postId: '',
      drinkId: ''
    };
  }

  componentDidMount() {
      
    this.setState({
    comment: this.props.newComment,
    userId: this.props.userId,
    postId: this.props.postId,
    drinkId: this.props.drinkId
        });
        // console.log('state from commentsupdate', this.props, this.state)
    }
   

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit() {
    const { postId, comment} = this.state;

    axios
      .put(`/comments/update/${postId}`, { comment })
      .then(res => {
          // console.log('after comment update commentsupdate', this.state)
        // this.props.updateUser(res.data)
      })
      .then(
          this.props.flipUpdate()
      )
      .then(
        this.props.logFinished()
        )
   this.props.history.push("/dashboard")
  }

  render() {
      // console.log('from register', this.state)
      // console.log('from regis auth', state.authReducer.id)
    // if (this.props.id) {
    //   return <Redirect to="/dashboard" />;
    // }
    // console.log('from passed props commentsupdate', this.props, this.state)
    return (
      <div>
        {/* <h1>Comment</h1> */}
        <input style={{width: '50vw', marginRight: '10px'}}
          type="text"
          placeholder="Comment"
          name="comment"
          onChange={this.handleInput}
          value={this.state.comment}
        />
        
        <button onClick={() => this.submit()}>Save</button>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('register state', state)
  return {
    id: state.authReducer.id,
    name: state.authReducer.name,
    comment: state.cocktailReducer.comment
  };
}

export default withRouter(connect(
  mapStateToProps,
  { updateUser }
)(CommentsUpdate));