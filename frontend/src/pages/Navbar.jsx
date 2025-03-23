import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

function Navbar() {
  const [data, setData] = useState({});
  const {id}=useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/dashboard/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DeepGram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <form className="d-flex" role="search">
              <button
                className="btn border search"
                type="submit"
                style={{
                  borderRadius: "20px 0px 0px 20px",
                  backgroundColor: "white",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type in Search"
                aria-label="Search"
                style={{ width: "700px", borderRadius: "0px 20px 20px 0px" }}
              />
            </form>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" style={{ textAlign: "right" }}>
                <a className="nav-link active" aria-current="page" href="#">
                  <button className="btn border">
                    <i className="fa-regular fa-message"></i>
                  </button>
                </a>
                <a className="nav-link" href="#">
                  <button className="btn border">
                    <i className="fa-regular fa-bell"></i>
                  </button>
                </a>
                {data.username ? (
                  <a className="nav-link" href="#">
                    <button className="btn">{data.username}</button>
                  </a>
                ) : (
                  <Link className="nav-link" to="/signup">
                    <button className="btn">Login</button>
                  </Link>
                )}
                <a className="nav-link">
                  <img
                    src={data.picture}
                    alt="User Avatar"
                    style={{
                      width: "50px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
