import React from 'react'
import headphone from "../assets/img/headphones.svg";
import { RatingEmpty, RatingFill, Footer} from "../Components";
import "./Styles/Checkout.css"
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
        {/* section-1 */}
       <div className="checkout-container">
       <div className="col-one">
           <img src={headphone} alt="headphone" className="headphone-image" />
         </div>
       <div className="col-two">
       <h1 className="product-heading">Focal Utopia - Wired Audiophile<br/> Headphones</h1>
          <p className="product-by">by <span>Hyperx</span></p>
          <div className="rating-container">
            <RatingFill/>
            <RatingFill/>
            <RatingFill/>
            <RatingFill/>
            <RatingEmpty />
          </div>
          <p className="product-price">₹ 3,999</p>
          <p className="product-description">
           FREE delivery: Thursday, Sep 30 Details<br/>
           Fastest delivery: Wednesday, Sep 29<br/>
           Save Extra with 3 offers<br/>
           No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 Details<br/>
           Bank Offer (2): Get up to Rs 1250 Amazon Pay Gift Card with Citi Credit EMI transactions <br/>
           Bank Offer (2): Get up to Rs 1250 Amazon Pay Gift Card with Citi Credit EMI transactions <br/>
           Partner Offers (2): Buy 2 or more and get 15% off on Qualifying items offered by Casa Decor <br/>
           bulletPartner Offers (2): Buy 2 or more and get 15% off on Qualifying items offered by Casa Decor  <br/>
          </p>
           
          
       <button className="checkout-btn"><a href="https://rzp.io/i/O4AvKifIT"><span className="btn-text">Pay now</span> </a></button>   
       </div>
         
        </div>
        {/* section-1 end */}

        {/* section-2 */}
        <Footer/>
        {/* section-2 end */}
        </>      
        
    )
}

export default Checkout
