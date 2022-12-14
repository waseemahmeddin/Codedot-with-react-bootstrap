import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route, Redirect} from "react-router-dom";

const App = () =>{
  return(
  <> 
  {/* we can use Routes insted of switch in latest version of react-router-dom  */}
  <Navbar />
  <Switch>
    <Route exact path="/" component = {Home} />
    <Route exact path="/about" component = {About} />
    <Route exact path="/services" component = {Services} />
    <Route exact path="/contact" component = {Contact} />
    <Redirect to = "/"/>
  </Switch>
  <Footer/>
  </>
  );
};

export default App;