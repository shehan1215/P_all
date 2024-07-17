import React, { Component } from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path = "/" exact Component={Home}></Route>
        </div> 
      </BrowserRouter>

    )
  }
}
