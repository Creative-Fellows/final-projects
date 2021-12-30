import "./Stories.css"
import React, { useState, useEffect } from "react";
import Axios from "axios";
  
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
            return <p className="nowrap">{user.title}</p>;
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