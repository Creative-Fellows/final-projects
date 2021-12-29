import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Authors.css"


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
          <h3>Top 10 Authors</h3>
          
          <div className="aParent">
          <table id="karma_table">
                <tr>
                    <th>Name</th>
                    <th>Karma</th>
                    <th>About</th>
                    
                </tr>
                <tr>
                <td>{listOfAuthors.map((user) => {
              return <p>{user.id}</p>;
            })}</td>

               <td>{listOfAuthors.map((user) => {
              return <p>{user.karma}</p>;
            })}
                 </td>
                <td>{listOfAuthors.map((user) => {
              return <p>{user.about}</p>;
            })}
                  </td></tr></table>
         </div> 
         </div>
     </div>
    );
  }
  