import React from "react";
import Common from "./Common";
import ct from "../src/images/contact.jpg"

const About = () =>{
    return (<>
   <Common name="Welcome To About Page"
    imgsrc={ct}
    subheading="Contact Us Now"
    btn_name= "Contact"
    to_ = "/contact"
    
    />
    
    </>);
};



export default About;