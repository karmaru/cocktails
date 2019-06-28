import React, { Component } from "react";
import axios from 'axios'
import {Link, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth_reducer";
import { updateDrink } from "../../redux/cocktail_reducer";


class Comments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idDrink: '',
      user_name: '',
      user_avatar: '',
      drink_name: '',  
      comments: []
    }

  }

  async componentDidMount() {
    
    await axios.get(`/comments/read/${this.props.idDrink}`).then(res => {
        console.log('res from comments call', res.data)
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
    return (
    
    <div style={{fontFamily: 'Lobster Two', fontSize: '30px', margin: '20px'}}>
        <h4>User Comments</h4>
            <hr/>
    {this.state.comments.map(posts => {
        console.log('comments compare',this.props.id,posts.user_id )
        if (this.props.id == posts.user_id) { 
        return (
           <div> 
            
            <div style={{width: '40vw', height: '20vh', border: '1px solid red',fontFamily: 'Lobster Two', fontSize: '15px', overflow: 'scroll', margin: '20px', padding: '10px'}}>
                {/* {posts.user_id} */}
                {posts.comment}
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <button  style={{marginLeft: '15px', width: '150px', height: '40px', fontFamily: 'Lobster Two', fontSize: '30px', borderRadius: '10px'}}>edit</button>
                <button  style={{marginLeft: '15px', width: '150px', height: '40px', fontFamily: 'Lobster Two', fontSize: '30px', borderRadius: '10px'}}>delete</button>
                </div>
            </div>
            {/* <h1>This Works</h1> */}
            
           </div> 
        )
    } else 
    return (
        <div>
            <div style={{width: '40vw', height: '10vh', border: '1px solid red',fontFamily: 'Lobster Two', fontSize: '15px', overflow: 'scroll', margin: '20px', padding: '10px'}}>
                {/* {posts.user_id} */}
                {posts.comment}
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
    id: state.authReducer.id
    // name: state.authReducer.name
  };
}

export default withRouter(connect(
  mapStateToProps,
// state => state
  { updateDrink, updateUser}
)(Comments));