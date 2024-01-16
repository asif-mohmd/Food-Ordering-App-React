import React from "react";

// inheriting React.Componet featues(Parent class)
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        company: "nil",
        bio: "nil",
        avatar_url: "http://",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/asif-mohmd");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("test1");
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("render");
    const { name, location, company, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="flex justify-around">

        <div className="m-10 ">
          <img className="w-80" src={avatar_url} alt="" />
        </div>

        <div className="m-12 w-auto h-auto bg-gray-200 rounded-lg">
          <ul className="m-5">
          <li className="font-extrabold ">Name: {name}</li>
          <li className="font-semibold pt-5">Location: {location}</li>
          <li className="font-semibold">Bio: {bio}</li>
          <li className="font-semibold">Company: {company}</li>
          </ul>
          
        </div>

      </div>
    );
  }
}

export default UserClass;
