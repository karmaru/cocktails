import React, { Component } from "react";
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";
import { updateDrink } from "../../redux/cocktail_reducer";
import {Modal, ButtonToolbar, } from 'react-bootstrap'
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
      addModalShow: false
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
  


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render () {

    let addModalClose = () => this.setState({addModalShow: false})
    let postFinished = () => 
    {
      this.setState({addModalShow: false})
      this.props.history.push("/dashboard");
    }

    

    return (
    
    <div style={{fontFamily: 'Lobster Two', fontSize: '30px', margin: '20px', overflow: 'scroll'}}>
      <div style={{display: 'flex'}}>
        <h4>User Comments</h4>
        <button style={{marginLeft: '50px', height: '30px', fontFamily: 'Lobster Two', width: '100px', fontSize: '14px', borderRadius: '10px'}}>Add Comment</button> 
        <Link style={{color: 'black', textDecoration: 'none', fontFamily: 'Lobster Two', fontSize: '40px', justifyContent: 'center', alignItems: 'center', margin: '20px',border: '1px solid black', padding: '5px'}}to='/postComment' >Post</Link> 
      </div>  
            <hr/>
          
    {this.state.comments.map(posts => {
        console.log('comments compare',this.props.id,posts.user_id )
        if (this.props.id == posts.user_id) { 
        return (
          <ButtonToolbar>
           <div> 
            
            <div style={{width: '40vw', height: '20vh', border: '1px solid red',fontFamily: 'Lobster Two', fontSize: '15px', overflow: 'scroll', margin: '20px', padding: '10px'}}>
                {/* {posts.user_id} */}
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>  
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <h5>{posts.name}</h5>
                  <img style={{height: '6vh', width: '6vw', objectFit: 'contain', margin: '10px'}} src={posts.avatar} alt=''/>
                </div>
                <div>
                {posts.comment}
                </div>
                {/* <hr/> */}
              </div>  
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                {/* <button  style={{marginLeft: '15px', width: '150px', height: '30px', fontFamily: 'Lobster Two', fontSize: '14px', borderRadius: '10px'}}>edit</button> */}
                <button  style={{marginLeft: '15px', width: '150px', height: '30px', fontFamily: 'Lobster Two', fontSize: '14px', borderRadius: '10px'}} onClick={() => this.setState({addModalShow: true})}>edit</button>
                <CommentsModal className="openmodal"
                show={this.state.addModalShow} onHide={addModalClose} logFinished={postFinished} userId={posts.user_id} postId={posts.post_id} drinkId={posts.drink_id} comment={posts.comment}/>
                <button  style={{marginLeft: '15px', width: '150px', height: '30px', fontFamily: 'Lobster Two', fontSize: '14px', borderRadius: '10px'}}>delete</button>
                </div>
            </div>
            {/* <h1>This Works</h1> */}
            
           </div> 
         </ButtonToolbar>
        )
    } else 
    return (
        <div>
            <div style={{width: '40vw', height: '20vh', border: '1px solid red',fontFamily: 'Lobster Two', fontSize: '15px', overflow: 'scroll', margin: '20px', padding: '10px', display:'flex'}}>
                {/* {posts.user_id} */}
                <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: '10px', alignItems: 'center'}}>
                <h5>{posts.name}</h5>
                <img style={{height: '6vh', width: '6vw', objectFit: 'contain', margin: '10px'}} src={posts.avatar} alt=''/>
                </div>
                <div>
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