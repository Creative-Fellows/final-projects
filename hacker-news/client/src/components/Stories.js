import "./Stories.css"
import React, { useState, useEffect } from "react";
import Axios from 'axios'

function Stories() {

  const [listOfStories, setListOfStories] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/stories").then((response) => {
      setListOfStories(response.data);
    });
  }, []);

    return (
      <div >
       
        <h1>Hacked News</h1>
        <h3>
        Top 10 Stories
        </h3>
        <div class="Achref">
            <div class="Nour">
                <span className="mah"> Title
                {listOfStories.map((user) => {
          return <p>{user.title}</p>;
        })}
                 </span>
            
            <div class="Nour">
                <span className="mah1"> Author   {listOfStories.map((user) => {
          return <p>{user.by.id}</p>;
        })} </span>
              
            </div>
            
            
            </div>
            
        </div>



       
      </div>
    );
  }
  
  export default Stories;
  