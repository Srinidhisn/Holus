// import logo from './logo.svg';
// import './App.css';
import Cart from './components/Cart';
import Addproducts from './components/Addproducts';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import { styled } from 'styled-components';
// //import Login from './components/Login';
//import Checkout from './components/Checkout';
//import Payment from './components/payment';
//import Address from './components/Address';
import Shopping from './components/Shopping';
import Home from './components/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import Menu from './components/Menu';
import About from './components/About';
// import Cart from './components/Cart';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      {/* <Shopping></Shopping> */}
      <Router>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Shopping" element={<Shopping />} />
      {/* <Route path="/Menu" element={<Menu />} /> */}
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      {/* <Route path="/signin" exact component={Signin} /> */}
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Cart" element={<Cart />} /> 
      <Route path="/Addproducts" element={<Addproducts />}></Route>

      {/* <Route path="/Home" exact componet={< Home/>}></Route>
      */}
      {/* <Container>  */}
    
      {/* <Route path="/Login" element={<Login />}></Route> */}
       
       {/* <Route path='/Address' element={<Address />}></Route> */}
       {/* <Route path='/Payment' element={<Payment />}></Route> */}
       {/* <Route path="/Checkout" element={<Checkout />}></Route> */}
      
       {/* <Route path="/Signup" element={<Signup/>}></Route> */}
       {/* <Route path='/Login' element={<Login/>}></Route> */}
       </Routes>
       <Footer />

       {/* </Container>  */}
      </Router>

    </div>
  );
}
const Container = styled.div``

export default App;
