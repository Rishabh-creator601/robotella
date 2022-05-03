import React from "react";
import web  from "../src/images/starter.png";
import Common from "./Common";

const Home = () =>{
    return (<>
 <Common name="Check Out Latest Robot accessories" 
 imgsrc={web}
 subheading="Get Latest Robot Accesories here"
 btn_name = "Get Started "
 to_ = "/service"
  />
    
    </>);
};



export default Home;