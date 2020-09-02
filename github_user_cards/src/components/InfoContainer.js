import React from 'react';
import Followers from './Followers';
import UserCard from './UserCard';

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
                <div>
                    <UserCard userData = {this.props.userData}/>
                    <Followers followersData = {this.props.followersData}/>
                </div>
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