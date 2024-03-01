
//import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/Home.jpg';
import "../styles/Home.css";
import {useLocation, useNavigate} from 'react-router-dom';

export default function Home (){
    const location=useLocation()

    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
        <h1>Holus's Vegetables & Fruits</h1>
        <br/>
        <p>Fresh Farm Veggies</p>
        <Link to ="/Shopping">
          <button>ORDER NOW</button>
        </Link>
        </div>
       
      </div>
    );
}

