import React from 'react';
import './App.css';
import constants from './constants';
import axios from 'axios';
import Followers from './components/Followers';
import UserCard from './components/UserCard';

class App extends React.Component{

  // constructor function
  constructor(){
    super();
    this.state ={
      dummystate: '',
      userData: {},
      followersData: {}
    }
  }

  // axios helper function - receives url, sets response data to state

  axiosHelper(url, value){
    return (
      axios.get(url)
        .then(res => {
          // console.log(res.data);
          this.setState({[value]: res.data});
          debugger;
        })
        .catch(err =>{
          console.log(err);
        })
    )

  }

  // componentdidmount function calls axios helper after component has mounted

  componentDidMount(){
      this.axiosHelper(constants.userUrl, 'userData');
      // setTimeout(() => {
      //   console.log(this.state.userData);
      // }, 1000);
      this.axiosHelper(constants.followersUrl, 'followersData');
      // setTimeout(() => {
      //   console.log(this.state.followersData);
      // }, 1000);
  }

  // render function
  render(){
    return(
      <div>
        <h1>Github Info App</h1>
        <UserCard/>
        <Followers/>
      </div>
    )
  }
}

export default App;
