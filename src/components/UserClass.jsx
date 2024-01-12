
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        console.log(props)
        super(props)
        console.log(this.props)
    }

    render(){
        console.log(this.props.name)
        return (
            <div className="user-card">
              <h2>Name: {this.props.name}</h2>
              <h3>Job: {this.props.job}</h3>
              <h4>Contact: @akshaymarch7</h4>
            </div>
          );

    }
}

export default UserClass;