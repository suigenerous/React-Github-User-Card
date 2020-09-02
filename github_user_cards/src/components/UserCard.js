import React from 'react';

export default class UserCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        return(
            <div>
                <h3>User</h3>
            </div>
        )
    }
}