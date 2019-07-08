import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addComment } from "../../redux/cocktail_reducer";
import './CommentsAdd.css'
import { withRouter } from "react-router-dom";

class CommentAdd extends Component {
  constructor() {
    super();

    this.state = {
      idDrink: '',
      comment: '',
      user_id: ''
    };
  }

  componentDidMount () {
    this.setState({
        idDrink: this.props.idDrink,
        user_id: this.props.user_id
    })
    // console.log('props from CDM of commentadd', this.props)
  }


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit() {
    const { idDrink, comment, user_id } = this.state;
    // console.log('this.state from commentadd', this.state)
    axios
      .post("/comments/create", {comment, idDrink, user_id})
      .then(
        this.props.flipUpdate()
    )
    .then(
      this.props.postFinished()
      )
      // this.props.history.push("/dashboard")
      // .then(
      //     // console.log('set comments commentadd', res.data)
      //     this.props.history.push("/dashboard")
      //   // this.setState({comments: res.data})
      // )
    //   .then(
    //     this.props.logFinishedReg()
    //       )
        // this.props.history.push("/dashboard")
      .catch(err => {
        if (err === 409){
          alert('comment insert failed')
        }
      });
  }

  render() {
      // console.log('from register', this.state)
      // console.log('from regis auth', state.authReducer.id)
    // if (this.props.id) {
    //   return <Redirect to="/dashboard" />;
    // }
    // console.log('props from commentsUpdate', this.state)
    return (
      <div>
        <h1>Add Comment</h1>
        <input style={{width: '200px', marginRight: '20px'}}
          type="text"
          placeholder="Drink Comment"
          name="comment"
          onChange={this.handleInput}
          value={this.state.name}
        />
        <button onClick={() => this.submit()}>Submit</button>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('register state', state)
  return {
    idDrink: state.cocktailReducer.idDrink,
    user_id: state.authReducer.id
  };
}

export default withRouter(connect(
  mapStateToProps,
  {addComment}
)(CommentAdd));