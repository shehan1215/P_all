import React, { Component } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavBar/>
          <Routes>     
            <Route exact path="/" element ={<Home/>}/>
            <Route exact path="/add" element ={<CreatePost/>}/>
            <Route exact path="/edit/:id" element ={<EditPost/>}/>
            <Route exact path="/post/:id" element ={<PostDetails/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
