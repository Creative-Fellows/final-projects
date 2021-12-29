import "./Stories.css"
import Axios from 'axios';
import React,{useState,useEffect} from "react";


  function Stories() {

    const [listOfStories,setListOfStories]= useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/stories").then((response) => {
          setListOfStories(response.data);
        });
      }, []);
    return (
     
     <div class="header">
         <h1>Hacked News</h1>
         <h3>Top 10 Stories</h3>
         <div class="row">
            <div class="col-3">
            <table id="story_table">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    
                </tr>
                <tr>
                <td>{listOfStories.map((user) => {
                 return <p>{user.title}</p>;})}</td>

               <td>{listOfStories.map((user) => {
                 return <p>{user.by.id}</p>;
                })} </td></tr></table>
            
           
         </div>
     </div>
     </div>
     
    

      
      
    );
  }
  
  export default Stories;