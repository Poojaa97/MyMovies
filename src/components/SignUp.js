import React from "react";
import "./SignUp.css";
import { Link, Navigate } from "react-router-dom";
import User from "../../public/assets/images/user.png";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    dob: "",
    navigate: false
  };

  register = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.dob === ""
    ) {
      alert("All the fields are Mandatory!!");
      return;
    }
    console.log(this.state);
    alert("Registraion Successful");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Navigate to="/" push={true} />;
    }

    return (
      <div className="bgcolor">
        <div className="basicContainer">
          <div className="basicDiv">
            <Link to={"/"}>
              <i className="fa fa-caret-left customCaret"></i>
            </Link>
            <h3 className="floatRight">Sign Up</h3>
          </div>
          <div className="basicDiv">
            <img className="ui centered small image" src={User} alt="user" />
          </div>
          <div className="buttonDiv">
            <form className="ui form basicDiv" onSubmit={this.register}>
              <div className="inline field disp">
                <i className="fa fa-user"></i>
                <input
                  className="customInput"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              <div className="inline field disp">
                <i className="fa fa-envelope"></i>
                <input
                  className="customInput"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="inline field disp">
                <i className="fa fa-key"></i>
                <input
                  className="customInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="inline field disp">
                <i className="fa fa-calendar"></i>
                <input
                  className="customInput"
                  type="text"
                  name="dob"
                  placeholder="Birthday"
                  value={this.state.dob}
                  onChange={(e) => this.setState({ dob: e.target.value })}
                />
              </div>
              <div className="buttonDiv">
                <button className="ui button customButton">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
