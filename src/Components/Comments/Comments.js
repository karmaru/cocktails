import React, { Component } from "react";
import './Comments.css'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";
import { updateDrink } from "../../redux/cocktail_reducer";
import {ButtonToolbar, } from 'react-bootstrap'
import CommentsModal from './CommentsModal'




class Comments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idDrink: '',
      user_name: '',
      user_avatar: '',
      drink_name: '',  
      comments: [],
      addModalShow: false,
      update: false
    }

  }

 

  async componentDidMount() {
    
    await axios.get(`/comments/read/${this.props.idDrink}`).then(res => {
        console.log('res from comments call', res.data, this.state)
        this.setState({
        comments: res.data
        });
    }).catch(err => console.log('error fetching comments:', err))
}

async componentDidUpdate(previousProps, previousState) {
  console.log('props from componentdidupdate comments', this.props)
  if (previousState.update !== this.state.update) { 
    console.log('block ran', this.state)
  await axios.get(`/comments/read/${this.props.idDrink}`).then(res => {
      console.log('res from comments call', res.data, this.state)
      this.setState({
      comments: res.data,
      update: false
      });
  })
  .catch(err => console.log('error fetching comments:', err))
}
  }



  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render () {
    let flipUpdate = () => {
      // console.log('flip update invoked', this.state)
      this.setState({
        update: !this.state.update
      })};
    
    let addModalClose = () => this.setState({addModalShow: false})
    let postFinished = () => 
    {
      this.setState({addModalShow: false})
      this.props.history.push("/dashboard");
    }

    let deleteComment = id => {
      axios.delete(`/comments/delete/${id}`, this.state.idDrink).then(res => {
        this.setState({
          comments: res.data
        })
        
      })
      .then(
        flipUpdate()
    )
    };

    

    return (
    
    <div style={{fontFamily: 'Lobster Two', fontSize: '30px', margin: '20px', overflow: 'scroll'}}>
      <div className='head_comm'>
        <h4>User Comments</h4>
        <Link to='/postComment' ><button className='button'>Add Comment</button></Link> 
      </div>  
        
            <hr/>
          
    {this.state.comments.map(posts => {
        console.log('comments compare',this.props.id,posts.user_id, posts )
        if (this.props.id === posts.user_id) { 
        return (
          <ButtonToolbar>
            <div className='comment_comm'>
              <div className='comments_comm'>
                  <img style={{height: '6vh', width: '6vw', objectFit: 'contain'}} src={posts.avatar} alt=''/>
                  <h5>{posts.name}</h5>
                  </div>
                  <div className='speech-bubble'>
                  {posts.comment}
              </div>
              {/* <br/> */}
            <div>
            <button  style={{marginLeft: '15px', width: '50px', height: '30px', fontFamily: 'Lobster Two', fontSize: '14px', borderRadius: '10px'}} onClick={() => this.setState({addModalShow: true})}>edit</button>
            <CommentsModal className="openmodal"
            show={this.state.addModalShow} onHide={addModalClose} logFinished={postFinished} userId={posts.user_id} postId={posts.post_id} drinkId={posts.drink_id} comment={posts.comment} flipUpdate={flipUpdate} deleteComment={deleteComment}/>
            <button  style={{marginLeft: '15px', width: '50px', height: '30px', fontFamily: 'Lobster Two', fontSize: '14px', borderRadius: '10px'}} onClick={() => deleteComment(posts.post_id, posts.drink_id)}>delete</button>
            </div>
            </div> 
         </ButtonToolbar>
        )
    } else 
    return (
        <div>
            <div className='comment_comm'>
                <div className='comments_comm'>
                <img style={{height: '6vh', width: '6vw', objectFit: 'contain'}} src={posts.avatar} alt=''/>
                <h5>{posts.name}</h5>
                </div>
                <div className='speech-bubble'>
                {posts.comment}
                </div>
            </div>
        </div>

    )
    }
    )}



    </div>




    )
}



}

function mapStateToProps(state) {
  console.log('drink state', state)
  return {
    idDrink: state.cocktailReducer.idDrink,
    name: state.authReducer.name,
    id: state.authReducer.id,
    avatar: state.authReducer.avatar
    // name: state.authReducer.name
  };
}

export default withRouter(connect(
  mapStateToProps,
// state => state
  { updateDrink, updateUser}
)(Comments));