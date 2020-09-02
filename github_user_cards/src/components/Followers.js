import React from 'react';
import Follower from './Follower';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

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
                <Grid>
                    <Container>
                        <Box>
                            <h3>Followers</h3>
                            {this.props.followersData.map(function(follower){
                                return <Follower key = {follower.login} followerObj = {follower}/>
                            })}
                        </Box>
                    </Container>
                </Grid>
                
               
            )
        }
        else{
            return(
                <Box>

                </Box>
            )
        }
    }
}