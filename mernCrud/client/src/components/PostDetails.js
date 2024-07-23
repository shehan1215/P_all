import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {

  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
      }
    })
  }


  render() {
    return (
      <div>
        Post Detls
      </div>
    )
  }
}
