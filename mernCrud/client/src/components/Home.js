import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

  // React inbuild method componentDidMount()
  componentDidMount(){ 
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        })
        // console.log(this.state.posts); 
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <p>All</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Topic</th>
              <th scope='col'>Desciption</th>
              <th scope='col'>Post Category</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>
                    <a href={`/post'/${posts._id}'`} style={{textDecorationColor:'none'}}>
                    {posts.Topic}
                    </a>
                  </td>
                <td>{posts.Desciption}</td>
                <td>{posts.PostCategory}</td>
                  <a className='btn btn-warning' href='#'>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className='btn btn-danger' href='#'>
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
              </tr>
            ))}
          </tbody>
        </table>

        <button className='btn btn-success'><a href='/add' style={{textDecoration:'none',color:'white'}}>Create New Post</a> </button>

      </div>
    )
  }
}
