//import { memo } from "react";
import "./index.css";
import { useEffect } from "react";
// import axios from "axios";h
//import { PostApi } from "./services/resources";
import { Link, Route, Routes } from "react-router";
import { toast } from "sonner";
import AboutScreens from "./screens/about-screens";
//import HomeScreens from "./screens/about-screens/home";
import ListScreens from "./screens/about-screens/list";
import TestScreens from "./screens/test";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchData2 = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log("response", response);
        toast.success("success");
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
      });
  };

   useEffect(() => {
  console.log("response", fetchData());
  console.log("fetchData2", fetchData2());
   }, []);

  return (
    <div className="flex justify-left justify-items-center text-black font-bold text-1xl md:text-3xl gap-4 min-h-screen bg-slate-300">
      <Link to={"/home"} className="text-blue-600 hover:underline active:text-black-800">Home</Link>
      <Link to={"/about"} className="text-blue-600 hover:underline hover:text-blue-800 ">Increment and Decrement</Link>
      <Link to={"/list"} className="text-blue-600 hover:underline hover:text-blue-800 ">List of Users</Link>
      <Link to={"/test"} className="text-blue-600 hover:underline hover:text-blue-800 ">Test</Link>
      <Routes>
        <Route path="/home" element={
          <div className="text-right font-bold text-2xl md:text-4xl">                       
                    Home Page    
            </div>                    
          } />
        <Route path="/about" element={<AboutScreens />} />
        <Route path="/list" element={<ListScreens />} />
        <Route path="/test" element={<TestScreens />} />
      </Routes>
    </div>
  ); 
}
export default App;
