import React,{useState} from "react";
import { styled } from "styled-components";
import instance from "../axios";
import axios from "../axios";

export default function Addproducts(){
    const [Name,setName]=useState("");
    const [ImageURL,setImageURL]=useState("");
    const [Price,setPrice]=useState(0);
    const [Quantity,setQuantity]=useState(0);
   const addproduct=(e)=>{
        e.preventDefault();
        axios.post("/stocks/add",{Name,ImageURL,Price,Quantity})
        //to reset the input
        .then(()=>{
            setName("");
            setImageURL("");
            setPrice(0);
            setQuantity(0);
        }).catch((error)=>alert(error.message));
    };
    return(
            <Container>
           <h1>Sell Products</h1>
           <Input>
           <p>Name</p>
           <input type="string" onChange={(e)=>setName(e.target.value)} value={Name}/></Input>
           <Input>
           <p>ImageURL</p>
           <input type="string" onChange={(e)=>setImageURL(e.target.value)} value={ImageURL}/>
           </Input>
           <Input>
           <p>Price</p>
           <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
           </Input>
           <Input>
           <p>Quantity</p>
           <input type="number" onChange={(e)=>setQuantity(e.target.value)} value={Quantity}/>
           </Input>
           <Button onClick={addproduct}>Add</Button>
           </Container>
    
        );
    }
    const Container= styled.div`
    text-align: center;`
    const Form=styled.form``
    const Input=styled.div``
    const Button=styled.button``
    