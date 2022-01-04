import React from 'react';
import Home from "./pages/Home/Home";
import { useState } from "react";
import Results from "./pages/Results";
import { Context } from "./Context";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";



export const ThemeContext = React.createContext()


function App() {
  const [theme, setTheme] = useState('white')
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();




  const getData = async () => {
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyB3s7e1Ps7AhwguzOP-GQ9tZvUvtHRsuJo&cx=02f4a3721fb0a1981&q=${searchTerm}`
      ).then(res=>{
        if(res.data){
          setData(res.data)
          navigate("/results");
      

        }else{
          navigate('/')
        }
      })
      
  };

  const searchGoogle = () => {
    getData();
  };

  

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Context.Provider value={{ data, setSearchTerm, searchTerm, searchGoogle }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Context.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
