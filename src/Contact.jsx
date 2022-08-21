import React, { useState } from "react";
const Contact = () => {
  const [data,setdata]= useState({
    fullname:'',
    number:'',
    email:'',
    message:'',
  });
  const InputEvent =(event)=>{
    const {name,value}=event.target;

    setdata((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };
  const formsubmit=(e)=>{
   e.preventDefault();
   console.log((`${data.fullname} ${data.number} ${data.email} ${data.message}`))
   alert('thank you for your feedback')
  };
  return (
    <>
      <div className="">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="your good name" />
              </div>
             
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="number"
                value={data.number}
                onChange={InputEvent}
                placeholder="12346" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@gmail.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;