import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        })
      }
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
