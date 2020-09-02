import React from 'react';

export default class Follower extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        // console.log(this.props.followerObj);
        const {login, avatar_url, html_url} = this.props.followerObj;

        return (
            <div>
                <img src = {avatar_url} alt = {`${login}'s avatar`}/>
                <a href = {html_url}>{login}</a>
            </div>
        )
    }
}