import React, { Component } from 'react'

export default class EditPost extends Component {


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
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Create New Post</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Topic</label>
            <input type='text' className='form-control' name='topic' 
            placeholder='Enter Your Topic' value={this.state.topic}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Description</label>
            <input type='text'
            className='form-control'
            name='desription'
            placeholder='Enter Your Description'
            value={this.state.description}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Post Category</label>
            <input type='text'
            className='form-control'
            name='desription'
            placeholder='Enter Your Post Category'
            value={this.state.postCategory}
            onChange={this.handleInputChange}/>
          </div>

          <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className='far fa-check-square'></i>
            &nbsp;save
          </button>

        </form>
      </div>
    )
  }
}
