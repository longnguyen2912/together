import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickForAge: props.age
        }
    }
        increase = (e) => {
            this.setState({clickForAge: this.state.clickForAge + 1})
        }

    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{firstName},{lastName}</h1>
                <h2>Age: {this.state.clickForAge}</h2>
                <h2>Hair Color: {hairColor}</h2>
                <button onClick={this.increase}>Birthday Button for {lastName} {firstName}</button>
            </div>
        );
    }
}
export default PersonCard;