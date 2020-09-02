import React from 'react';
import './App.css';
import constants from './constants';
import axios from 'axios';
import InfoContainer from './components/InfoContainer'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


class App extends React.Component{

  // constructor function
  constructor(){
    super();
    this.state ={
      userData: {},
      followersData: {},
      code: null,
      token: null,
      loggedIn: false
    }
  }

  // axios helper function - receives url, sets response data to state

  axiosHelper(url, value){
    return (
      axios.get(url, {
        headers: {
          Authorization: `${this.state.token}OAUTH-TOKEN`
        }
      })
        .then(res => {
          // console.log(res.data);
          this.setState({[value]: res.data});
        })
        .catch(err =>{
          console.log(err);
          this.setState({loggedIn: false});
        })
    )

  }

  // authorization code grabber

  authCodeGrabber() {
    const code = window.location.href.split('=')[1];
    return this.setState({code: code});
  }

  // token grabber

  tokenGrabber(){
      return(
        axios.get(`https://user-cards-william-herman.herokuapp.com/authenticate/${this.state.code}`)
          .then(res => {
            // console.log(res.data.token);
            this.setState({token: res.data.token})
          })
          .catch(err => {
            console.log(err);
            debugger;
          })
      ) 
  }

  // componentdidmount function calls axios helper after component has mounted

  componentDidMount(){
      this.authCodeGrabber();
      setTimeout(() => {
        if (this.state.code !== null){
          this.tokenGrabber();
        }
      }, 1000);
      this.axiosHelper(constants.userUrl, 'userData');
      this.axiosHelper(constants.followersUrl, 'followersData');
  }

  // render function
  render(){
    if (this.state.followersData.length){
      return(
        <Container>
          <h1>Github Info App</h1>
          <InfoContainer 
            // loggedIn = {this.state.followersData === {} || this.state.userData === {} ? false : true} 
            // loggedIn = {false}
            userData = {this.state.userData} 
            followersData = {this.state.followersData}
          />
        </Container>
      )
    }
    else{
      return(
        <Container>
          <h1>Github Info App</h1>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${constants.clientId}&scope=user&redirect_uri=${constants.redirect_uri}`}
          >
            Login
          </a>
        </Container>
      )

    }
    
  }
}

export default App;
