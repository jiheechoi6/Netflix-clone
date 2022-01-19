import "./home.scss"
import Navbar from "../components/navbar/Navbar";
import img from "./jpg.jpeg"
import { useState } from "react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  return (
    <div className="home">
        <Navbar/>
        <img width="100%" src={img} alt=""/>
    </div>
  );
};

export default Home;
