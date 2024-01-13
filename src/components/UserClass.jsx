import React from "react";

// inheriting React.Componet featues(Parent class)
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        company:"nil",
        bio:"nil",
        avatar_url:"http://"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/asif-mohmd");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("test1" )
    console.log(json)
  }
   
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("component will unmount")
  }

  render() {
    console.log("render")
    const { name, location, company, bio,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
        <h4>Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
