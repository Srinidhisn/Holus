import React from "react";
import A from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${A})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Holus is Fresh Produce from the Farm. We are here the solve the problem of farmers who is not getting much profits due to lot of chain between customers and farmers.
        We collect Fresh Vegetables and Fruits from Farmers Directly and delivery to customers and small businesses.
       </p>
      </div>
    </div>
  );
}

export default About;