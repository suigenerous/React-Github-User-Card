import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default class UserCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        // console.log(this.props.userData);
        const {login, avatar_url, html_url} = this.props.userData;
        return(
            <Container>
                <Box>
                    <h3>User</h3>
                    <img src = {avatar_url} alt = {`${login}'s avatar`}/>
                    <a href = {html_url}>{login}</a>
                </Box>
            </Container>
           
        )
    }
}