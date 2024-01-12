
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)   
    }

    render(){
        const {name,job} = this.props
        return (
            <div className="user-card">
              <h2>Name: {name}</h2>
              <h3>Job: {job}</h3>
              <h4>Contact: @akshaymarch7</h4>
            </div>
          );

    }
}

export default UserClass;