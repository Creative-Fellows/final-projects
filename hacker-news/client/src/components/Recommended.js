import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";

export default function Recommended() {
  var ids = [];
  var arr = []; // Array to contain match elements
  const [listOfUsers, setListOfUsers] = useState([]);
  let { stories } = useParams();
  console.log(stories);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/stories").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  return (
    <div>
      <p>similar story to "{JSON.stringify(stories)}" </p>
      <div className="aParent">
        <span className="title">Title</span>

        {listOfUsers.map((user) => {
          if (user.title == stories) {
            ids.push(user.kids);
            //   console.log(user.kids);
          }
        })}
        {listOfUsers.forEach((stori) => {
          function arrayMatch(arr1, arr2) {
            for (var i = 0; i < arr1.length; ++i) {
              for (var j = 0; j < arr2.length; ++j) {
                if (arr1[i] == arr2[j]) {
                  // If element is in both the arrays
                  arr.push(arr1[i]); // Push to arr array
                }
              }
            }
            if (arr.length == 0) {
              return <h1>There is no similar stories in the top 10 stories</h1>;
            }
            return arr; // Return the arr elements
          }
          console.log(arrayMatch(stori.kids, ids));
        })}
        {listOfUsers.map((user) => {
          return arr.length == 0 ? (
            <h1>No Similar stories</h1>
          ) : (
            <span>
              {" "}
              <p>{user.title}</p> <p>{user.by}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
}
