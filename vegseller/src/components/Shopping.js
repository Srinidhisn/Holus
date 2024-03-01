import React,{useState,useEffect} from "react";
import axios from "../axios";
import '../styles/veg_shopping.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
export default function Shopping(){
const [ products,setProducts ] = useState([])
useEffect(()=>{
  axios.get("/stocks/get").then((resp)=>{
    
  setProducts(resp.data.data); 
 })
},[])
console.log(products)
console.log(typeof products)
        return (   
    <div className='doctor-container'>
    <Row>
     {
       products && products.map(data => <Col key={data.doc_id} xs={3}>
         <div>
 <Card  className='doctor-card' style={{ width: '19rem' }} >
   <Card.Img className='doctor-card-img' variant="top" src={data.ImageURL} />
   <Card.Body>
     <Card.Title>{data.Name}</Card.Title>
     <Card.Subtitle>{data._id}</Card.Subtitle>
     <Card.Text>{data.Quantity}</Card.Text>
   </Card.Body>
   <Card.Body style={{backGroundColor:'white'}}>
     <Button  variant='outline-success'><Link to="/Cart">Add to cart</Link></Button>
   </Card.Body>
 </Card>
 </div>
 </Col>
     )}
       

   
   </Row> 
   </div>
          );
        }