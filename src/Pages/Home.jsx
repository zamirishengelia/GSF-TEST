import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.83.13.70:8000/api/school/")
      .then((response) => {
        const list = response.data;
        setSchools(list);
        console.log("res", list);
        console.log("schools", schools);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!schools) return <div>Loading...</div>;
  return (
    <div className="cont">
      <h1>Home Page</h1>
      <div>
        <h1>School List</h1>
        <ul>
          {schools.map((school) => (
            <li key={school.id}>
              <h2>{school.school_name}</h2>
              <p>ID: {school.id}</p>
              <p>Created: {school.created}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Home;
