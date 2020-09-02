import React from 'react';

export default class Followers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        return(
            <div>
                <h3>Followers</h3>
            </div>
        )
    }
}