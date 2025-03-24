import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Hero() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/dashboard/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="container mt-3 ">
        <img
          src="./about.jpeg"
          style={{ width: "100%", borderRadius: "20px" }}
        />
        <div
          className="row mt-3 p-3"
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            paddingBottom: "20px",
          }}
        >
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <img
                  src={data.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                />
              </div>
              <div className="col-9" style={{ paddingTop: "40px" }}>
                <span style={{ fontSize: "Larger", fontWeight: "bold" }}>
                  {data.username}
                </span>
                <br></br>
                <span className="" style={{ color: "gray" }}>
                  {data.name}
                </span>
                <br></br>
                <span style={{ color: "gray" }}>327 Friends</span>
              </div>
            </div>
          </div>
          <div className="col-6 text-end" style={{ paddingTop: "40px" }}>
            <button className="btn btn-primary">
              Follow <i class="fa-solid fa-user-plus"></i>
            </button>{" "}
            &nbsp; &nbsp;
            <button className="btn border" style={{ color: "blue" }}>
              Message <i class="fa-solid fa-user-plus"></i>
            </button>
          </div>
          <div className="container-fluid mt-3">
            <button className="btn btn-primary">Posts</button> &nbsp; &nbsp;
            <button className="btn border ">About</button> &nbsp; &nbsp;
            <button className="btn border">Picture</button> &nbsp; &nbsp;
            <button className="btn border">Videos</button> &nbsp; &nbsp;
            <button className="btn border">Friends</button> &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
