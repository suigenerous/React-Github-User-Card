import React from 'react';
import Follower from './Follower';

export default class Followers extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            dummystate: ''
        }
    }


    render(){
        // console.log(this.props.followersData);
        if (this.props.followersData.length){
            return(
                <div>
                    <h3>Followers</h3>
                    {this.props.followersData.map(function(follower){
                        return <Follower key = {follower.login} followerObj = {follower}/>
                    })}
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