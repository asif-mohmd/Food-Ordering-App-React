
import React from "react";

// inheriting React.Componet featues(Parent class)
class UserClass extends React.Component{

    constructor(props){
        super(props)   
        
        this.state = {
        count: 0,
        count2: 2,
        }    

    }


    render(){
        const {name,job} = this.props
        const {count,count2} = this.state

        return (
            <div className="user-card">
              <h1>Count = {count}</h1>
              <h1>Count 2 = {count2}</h1>

              <button onClick={()=>{
                this.setState({count:this.state.count + 1})
              }}>Increasing Button</button>

              <h2>Name: {name}</h2>
              <h3>Job: {job}</h3>
              <h4>Contact:</h4>
            </div>
          );

    }
}

export default UserClass;