import React, { useState, useEffect } from "react";
import axios from "axios";

const Google = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:5000/search")
      .then((response) => {
        // Handle the API response data here
        console.log(response.data);
        setData(response.data.items); // Store the 'items' array in state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
      {/* {data.map((i) => {
        return <h1 key={i.items.title}>{i.items.title}</h1>;
      })} */}

      {/* <ul>
        {data.map((item, index) => (
          <li key={index}>{item.titles[index]}</li>
        ))}
      </ul> */}
      {data}
    </div>
  );
};

export default Google;
