import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Posts() {
  const [data, setData] = useState({});
  const [posts, setPosts] = useState([]);
  const{id}=useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/dashboard/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
      <div className="container">
        <h2>Posts</h2>
      </div>

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="container p-3 my-3" style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}>
            <div className="row">
              <div className="col-1">
                <img 
                  src={data?.picture || "defaultImageURL"} 
                  alt="User Profile"
                  style={{ borderRadius: "50%", width: "100%" }} 
                />
              </div>
              <div className="col-11">
                <span>{data.username}</span>
                <p style={{ color: "gray" }}>{post?.date}</p>
              </div>
              <span className="mt-3">{post?.description}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="container p-3 text-center">
          <p>No posts available.</p>
        </div>
      )}
    </>
  );
}

export default Posts;
