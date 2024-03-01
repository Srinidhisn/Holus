
import React from 'react'
import Apple from "../assets/apple.png"
import Carrot from "../assets/carrot.png"
import "../styles/cart.css"
export default function Cart() {
  return (
    <div>
      <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - 2 items</h5>
            </div>
            <div className="card-body">
              {/* <!-- Single item --> */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* <!-- Image --> */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={Apple}
                      className="w-100" alt="Apple" />
                    <a href="#!">
                      <div className="mask" id="bg"></div>
                    </a>
                  </div>
                  {/* <!-- Image --> */}
                </div>
  
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Data --> */}
                  <p><strong>Apple</strong></p>
                  <p>Category: Fruit</p>
                  
                  <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                    title="Remove item">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list">
                    <i className="fas fa-heart"></i>
                  </button>
                  {/* <!-- Data --> */}
                </div>
  
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Quantity --> */}
                  <div className="d-flex mb-4">
                    <button className="btn btn-primary px-3 me-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      {/* <!-- <i class="fas fa-minus"></i> --> */}
                      <i>-</i>
                    </button>
  
                    <div className="form-outline">
                      <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                      <label className="form-label" for="form1">Quantity(kg)</label>
                    </div>
  
                    <button className="btn btn-primary px-3 ms-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      {/* <!-- <i class="fas fa-plus"></i> --> */}
                      <i >+</i>
                    </button>
                  </div>
                  {/* <!-- Quantity --> */}
  
                  {/* <!-- Price --> */}
                  <p className="text-start text-md-center">
                    <strong>$19.99</strong>
                  </p>
                  {/* <!-- Price --> */}
                </div>
              </div>
              {/* <!-- Single item --> */}
  
              <hr className="my-4" />
  
              {/* <!-- Single item --> */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* <!-- Image --> */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={Carrot}
                      className="w-100" alt="carrot" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  {/* <!-- Image --> */}
                </div>
  
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Data --> */}
                  <p><strong>Carrot</strong></p>
                  <p>Category: Vegitable</p>
                  
  
                  <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                    title="Remove item">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list">
                    <i className="fas fa-heart"></i>
                  </button>
                  {/* <!-- Data --> */}
                </div>
  
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Quantity --> */}
                  <div className="d-flex mb-4" >
                    <button className="btn btn-primary px-3 me-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      {/* <!-- <i class="fas fa-minus"></i> --> */}
                      <i >-</i>
                    </button>
  
                    <div className="form-outline">
                      <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                      <label className="form-label" for="form1">Quantity(kg)</label>
                    </div>
  
                    <button className="btn btn-primary px-3 ms-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      {/* <!-- <i class="fas fa-plus"></i> --> */}
                      <i>+</i>
                    </button>
                  </div>
                  {/* <!-- Quantity --> */}
  
                  {/* <!-- Price --> */}
                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                  {/* <!-- Price --> */}
                </div>
              </div>
              {/* <!-- Single item --> */}
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p className="mb-0">12.10.2023 - 14.10.2023</p>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body">
              <p><strong>We accept</strong></p>
              <img className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa" />
              <img className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express" />
              <img className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard" />
              <img className="me-2" width="45px"
                src="https://m.economictimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg"
                alt="UPI" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Free delivery</span>
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      {/* <!-- <p class="mb-0">(Including VAT)</p> --> */}
                    </strong>
                  </div>
                  <span><strong>$40.98</strong></span>
                </li>
              </ul>
  
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
  }


   

  