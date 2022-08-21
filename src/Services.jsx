import React from "react";
import Card from "./Card";
import web from "../src/images/img-2.jpg"
import app from "../src/images/img-4.jpg"
import game from "../src/images/img-5.jpg"
import soft from "../src/images/img-6.jpg"
const Services = () =>{
  const Sdata =[
    {
      imgsrc:web,
      title:"Web development",
    },
    {
      imgsrc:app,
      title:"App development",
    },
    {
      imgsrc:game,
      title:"Game development",
    },
    {
      imgsrc:soft,
      title:"Software development",
    },
    {
      imgsrc:soft,
      title:"Software development",
    },
    {
      imgsrc:soft,
      title:"Software development",
    },
  ]
  return(
  <>
  <div className="my-4"> 
    <h1 className="text-center">Our Services</h1>
  </div>
  <div className=" container-fluid mb-5">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row gy-3">
        {
          Sdata.map((val,ind)=>
          {
            return <Card key={ind} imgsrc= {val.imgsrc} title= {val.title}/>  
          })
        }
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Services;