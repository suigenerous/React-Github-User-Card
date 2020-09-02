import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

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
            <Card>
                <img src = {avatar_url} alt = {`${login}'s avatar`}/>
                <a href = {html_url}>{login}</a>
            </Card>
        )
    }
}