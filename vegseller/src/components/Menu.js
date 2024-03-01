import React, {useEffect} from "react";
import { MenuList } from "./MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

import axios from "../axios";

export default function Menu() {
  // const [items,setItems]=useEffect();
  // useEffect(()=>{
  //   const getdata= async()=>{
  //     const data= await axios.get("/stocks/get");
  //     console.log("fetched data: ",data);
  //     setItems(data);
  //   };
  //   getdata();
  // },[]);
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {/* {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })} */}
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
    
