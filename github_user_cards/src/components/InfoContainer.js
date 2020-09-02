import React from 'react';
import Followers from './Followers';
import UserCard from './UserCard';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default class InfoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: '',
            loggedIn: false
        }
    }



    render(){
        if (this.props.followersData.length){
            return(
                <Container>
                    <UserCard userData = {this.props.userData}/>
                    <Followers followersData = {this.props.followersData}/>
                </Container>
            )
        }
        else {
            return(
                <div>

                </div>
            )
        }
        
    }
}