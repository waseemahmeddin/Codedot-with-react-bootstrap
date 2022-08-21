import React from "react";
import web from "../src/images/img-3.svg"
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common 
      name=" Welcome to About page" 
      imgsrc={web} 
      visit='/contact'
      btname='Contact Now' />

    </>
  );
};

export default About;