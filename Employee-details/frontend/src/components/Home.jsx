import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [empData, setEmpData] = useState([]);
const navigate = useNavigate()
  const getAllEmp = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/get");
        if (!response) {
            console.log("No data fetch");
            return
        }
        
        setEmpData(response.data.data)
        

    } catch (error) {console.log(error);
    }
    };
    
    console.log(empData);
    

  useEffect(() => {
    getAllEmp();
  }, []);

  return (
    <div className="max-w-2xl mx-auto border-2">
      <h1 className="text-center text-3xl font-semibold">
        Employee Details...
      </h1>

          <button onClick={() => navigate("/create")} className="bg-green-600">Add data</button>
          
      <ul>
        {empData.map((item, index) => (
          <li key={index}>
            <p>Name: {item.empName}</p>
            <p>Age: {item.empAge}</p>
            <p>Designation: {item.empDesignation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
