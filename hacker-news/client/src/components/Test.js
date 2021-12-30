import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Test() {
  const [listOfAuthors, setListOfAuthors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/stori").then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);
  return (
    <div>
      <h5>hi</h5>
      {listOfAuthors.map((val) => {
        return (
          <div>
            <h1>{val.id}</h1>
          </div>
        );
      })}
    </div>
  );
}