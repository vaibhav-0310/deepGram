import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formData);

      console.log("Login Success:", response.data);
      alert("Login successful!");

      navigate(`/${response.data.userId}`);
      
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-8 text-center p-5">
          <h1>Login to your account</h1><br></br>
          <p style={{ color: "gray" }}>To continue, Login</p>
          <div className="container text-center">
            <form onSubmit={handleSubmit}>
              <p>Username</p>
              <input
                placeholder="Username"
                type="text"
                name="username"
                className="signup"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <br /><br />

              <p>Password</p>
              <input
                placeholder="Password"
                type="password"
                name="password"
                className="signup"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <br /><br />

              <button type="submit" className="btn btn-primary mb-3">Submit</button><br></br>
            </form>
            <Link to="/signup" ><p className="mt-2">New User! SignUp Now</p></Link>
          </div>
        </div>
        <div className="col-4 joy">
          <img src="/joy.jpg" alt="Joy" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default Login;
