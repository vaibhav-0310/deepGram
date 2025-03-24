import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Mind() {
  const [data, setData] = useState({});
  const { id } = useParams(); 
  const [formdata, setFormData] = useState({
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlePost = () => {
    try {
      axios.post(`http://localhost:8080/posts/${id}`, formdata);
    } catch (e) {
      console.log(e);
    }
  };

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
    <div
      className="container-fluid p-3"
      style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src={data?.picture || "defaultImageURL"}
            alt="User Profile"
            style={{ borderRadius: "50%", width: "100%" }}
          />
        </div>
        <div className="col-11">
          <form onSubmit={handlePost}>
            <input
              className="form-control me-2"
              type="search"
              name="description"
              placeholder="What's on your mind"
              aria-label="Search"
              value={formdata.description}
              onChange={handleChange}
              required
              style={{ width: "100%", borderRadius: "20px" }}
            />
            <div className="row mt-3">
              <div className="col-6 text-start">
                <i className="fa-regular fa-image mx-2"></i>
                <i className="fa-solid fa-file mx-2"></i>
                <i className="fa-solid fa-location-dot mx-2"></i>
                <i className="fa-regular fa-face-smile mx-2"></i>
              </div>
              <div className="col-6 text-end">
                <button type="submit" className="btn border">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mind;
