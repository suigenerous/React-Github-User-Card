import React from 'react';
import './App.css';
import constants from './constants'

class App extends React.Component{

  // constructor function
  constructor(){
    super();
    this.state ={
      dummystate: '',
      userData: [],
      followersData: []
    }
  }

  // axios helper function - receives url, sets response data to state

  axiosHelper(url){

  }

  // componentdidmount function calls axios helper after component has mounted

  componentDidMount(){
    return;
  }

  // render function
  render(){
    return(
      <div>
        <h1>Github Info App</h1>
      </div>
    )
  }
}

export default App;
