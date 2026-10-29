import { memo } from "react";
import "./index.css";
// import axios from "axios";
import { PostApi } from "./services/resources";
import { Link, Route, Routes } from "react-router";
import AboutScreens from "./screens/about-screens";
import { toast } from "sonner";

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

  // useEffect(() => {
  console.log("response", fetchData());
  console.log("fetchData2", fetchData2());
  // }, []);

  return (
    <div className="flex justify-left justify-items-center text-black font-bold text-1xl md:text-3xl gap-4 min-h-screen bg-slate-300">
      <Link to={"/"} className="text-blue-600 hover:underline active:text-black-800">About</Link>
      <Link to={"/about"} className="text-blue-600 hover:underline hover:text-blue-800 ">Homes</Link>
      <Routes>
        <Route path="/" element={
          <div className="text-right font-bold text-2xl md:text-4xl">Homes</div>
          
          
          } />
        <Route path="/about" element={<AboutScreens />} />
      </Routes>
    </div>
  );
}

export default App;
