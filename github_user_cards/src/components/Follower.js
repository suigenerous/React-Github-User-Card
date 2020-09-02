import React from 'react';

export default class Follower extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        console.log(this.props.followerObj);
        const {login, avatar_url, url} = this.props.followerObj;

        return (
            <div>
                <img src = {avatar_url} alt = {`${login}'s avatar picture`}/>
                <h4>{login}</h4>
            </div>
        )
    }
}