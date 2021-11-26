import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
    navigate: false
  };

  login = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.password === "") {
      alert("All the fields are Mandatory!!");
      return;
    }
    console.log(this.state);
    // alert("Registraion Successful");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Navigate to="/movies" />;
    }

    return (
      <div className="bgcolor">
        <div className="basicContainer">
          <div className="basicDiv">
            {/* <i className="fa fa-caret-left customCaret"></i> */}
            <h3 className="floatRight">Login</h3>
          </div>
          <div className="basicDiv">
            <p>MY MOVIE</p>
          </div>
          <div className="buttonDiv">
            <form className="ui form basicDiv" onSubmit={this.login}>
              <div className="inline field disp">
                <i className="fa fa-user"></i>
                <input
                  className="customInput"
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
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

              <div className="buttonDiv">
                <button className="ui button customButton">Login</button>
              </div>
              <p>
                Don't have an account? <Link to={"/SignUp"}> Sign Up </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
