import React from "react";
import web from "../src/images/img-1.jpg"
import Common from "./Common";
const Home = () => {
  return (
    <>
   { <Common 
      name=" Welcome to " 
      imgsrc={web} 
      visit='/services'
      btname='Get Started' 
      /> }

    </>
  );
};

export default Home;