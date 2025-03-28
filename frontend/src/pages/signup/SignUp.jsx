import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    picture: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", formData);

      console.log("Signup Success:", response.data);
      alert("Signup successful!");

      navigate(`/${response.data.userId}`);
      
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-8 text-center p-5">
          <h1>Create an account</h1>
          <p style={{ color: "gray" }}>To continue, fill out your personal Info</p>
          <div className="container text-center">
            <form onSubmit={handleSubmit}>
              <p>Email</p>
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="signup"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br /><br />

              <p>Full Name</p>
              <input
                placeholder="Your name"
                type="text"
                name="name"
                className="signup"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <br /><br />

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
              <p>Profile Picture</p>
              <input
                placeholder="Profile Picture"
                type="text"
                name="picture"
                className="signup mb-3"
                value={formData.picture}
                onChange={handleChange}
                required
              /><br></br>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-4 joy">
          <img src="/joy.jpg" alt="Joy" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default SignUp;
