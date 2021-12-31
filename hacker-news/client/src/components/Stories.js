import "./Stories.css"
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
  
  export default function Stories() {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:8000/api/stories").then((response) => {
        setListOfUsers(response.data);
      });
    }, []);
  
    return (
      <div>
        <h1>Hacked News</h1>
        <h5>Top 10 Stories</h5>
  
        <div className="Parent">
          <span className="title">Title</span>
          {listOfUsers.map((user) => {
            return (
              <div key={user.title}>
                {" "}
                <Link className="link" to={`/similar/${user.title}`}>
                  <p className="nowrap">{user.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <span className="author">Author</span>
          {listOfUsers.map((user) => {
            return <p className="nowrap">{user.by}</p>;
          })}
        </div>
      </div>
    );
  } 