import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Search() {
  const [listOfAuthors, setListOfAuthors] = useState([]);
  const [listOfStory, setListOfStory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    Axios.get("http://localhost:8000/api/stori").then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Author ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button>Search</button>

      {/* {listOfAuthors.map((val, key) => {
        return (
          <div>
            <p>{val.id}</p>
          </div>
        );
      })} */}
      {listOfAuthors
        .filter((user) => {
          if (searchTerm == "") {
            //  return user;
          } else if (
            user.by.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return user;
          }
        })
        .map((user, key) => {
          return (
            <div className="user" key={key}>
              <p>author: {user.by}</p>
              <p>title: {user.title}</p>
              <p>comments: {user.kids.length}</p>
              <p>Points: {user.score}</p>
              {/* <p>{user.score}</p> */}
              {/* 
              {listOfStory.map((val, key) => {
                <a>{val.by}</a>;
                <a>{val.title}</a>
                // <p>{val.by}</p>;
              })} */}
              {/* <p>karma :{user.karma}</p>
                <p> about : {user.about}</p> */}
            </div>
          );
        })}
    </div>
  );
}