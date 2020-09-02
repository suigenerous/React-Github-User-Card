import React from 'react';
import Followers from './Followers';
import UserCard from './UserCard';

export default class InfoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        if (this.props.loggedIn === true){
            return(
                <div>
                    <UserCard userData = {this.props.userData}/>
                    <Followers followersData = {this.props.userData}/>
                </div>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}