import React from "react";
import Navbar from "./Compnents/Navbar";
import News from "./Compnents/News";
import { Route, Routes } from "react-router-dom";

const App=()=>{
  const pageSize=10;
    return(<>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<News key="general" pageSize={pageSize} country="in" category="general"/>}/>
        <Route index path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business"/>}/>
        <Route index path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
        <Route index path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health"/>}/>
        <Route index path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science"/>}/>
        <Route index path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
        <Route index path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
      </Routes>
    </>)
}
export default App;