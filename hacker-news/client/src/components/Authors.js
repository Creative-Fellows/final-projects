import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Authors() {
  const [listOfAuthors, setListOfAuthors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/author").then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1>Hacked News</h1>
        <h5>Top 10 Authors</h5>

        <div className="aParent">
          <span className="title">name</span>
          {listOfAuthors.map((user) => {
            return <p>{user.id}</p>;
          })}
        </div>
        <div className="aParent">
          <span className="author">karma</span>
          {listOfAuthors.map((user) => {
            return <p>{user.karma}</p>;
          })}
        </div>
        <div className="aParent">
          <span className="author">about</span>
          {listOfAuthors.map((user) => {
            return <p>{user.about}</p>;
          })}
        </div>
      </div>
    </div>
  );
}