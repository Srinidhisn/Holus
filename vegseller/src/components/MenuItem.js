import axios from "../axios";
import React,{useState} from "react";

function MenuItem({ quantity,image, name, price }) {
  // const [items,setItems]=useEffect('');
  // useEffect(()=>{
  //   const getdata= async()=>{
  //     const data= await axios.get("/stocks/get");
  //     console.log("fetched data: ",data);
  //     setItems(data);
  //   };
  //   getdata();
  //},[]);
  // const [count,setCount]=useState(0); 
   return (
   
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <h1> {quantity} </h1>
      {/* <center> <h2>{count}</h2></center> */}
      {/* <button className="btn btn-success" onClick={()=>setCount (currentCount=>currentCount+1)}>+</button>
      <button className="btn btn-danger" onClick={()=>setCount(currentCount=>currentCount-1)}>-</button> */}

    
        <center><button>ADD TO CART</button></center>
     
  </div>

  );
}
export default MenuItem;

