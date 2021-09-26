import React from "react";
import headphone from "../assets/img/headphones.svg";
import { RatingEmpty, RatingFill, Navbar } from "../Components";
import "./Styles/Checkout.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Checkout = () => {
  return (
    <div className="main-container">
      <div className="checkout-navbar-container">
        <Navbar />
      </div>
      <div className="checkout-container">
        {/* Slide */}
        <div>
          <Splide
            options={{
              rewind: true,
              width: 600,
              gap: "5rem",
            }}
          >
            <SplideSlide>
              <img className="center-img" src={headphone} alt="asd" />
            </SplideSlide>
            <SplideSlide>
              <img className="center-img" src={headphone} alt="asd" />
            </SplideSlide>
          </Splide>
        </div>
        {/* col-2 */}
        <div>
          <h1>
            Casa Decor Geometrix Art Cake Stand Planter Stool Multipurpose Black
            (Dia 8 inch)
          </h1>
          <div className="rating-container">
            <RatingFill />
            <RatingFill />
            <RatingFill />
            <RatingFill />
            <RatingEmpty />
          </div>
          <p>MRP: ₹ 500000</p>
          <p>FREE delivery: Thursday, Sep 30 Details</p>
          <p>Fastest delivery: Wednesday, Sep 29</p>
          {/* table container */}
          <div className="table-parent">
            <div className="table-container">
              {/* row-1 */}
              <div className="row-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-row-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Save Extra with 3 offers
              </div>
              {/* row-2 */}
              <div className="row-2">
                No Cost EMI: Avail No Cost EMI on select cards for orders above
                ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select cards for
                orders above ₹3000 Details
              </div>
              {/* row-3 */}
              <div className="row-3">
                Bank Offer (2): Get up to Rs 1250 Amazon Pay Gift Card with Citi
                Credit EMI transactions See All
              </div>
              {/* row-4 */}
              <div className="row-4">
                Partner Offers (2): Buy 2 or more and get 15% off on Qualifying
                items offered by Casa Decor See All
              </div>
            </div>
          </div>
          {/* table container endddddddddd */}
          <div className="icon-container">
            <div className="icon-col-1">
              <img
                className="icon-image"
                src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                alt=""
              />
              <p className="icon-para">10 Days Returnable</p>
            </div>
            <div className="icon-col-2">
              <img
                className="icon-image"
                src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                alt=""
              />
              <p className="icon-para">Amazon Delivered</p>
            </div>
            <div className="icon-col-3">
              <img
                className="icon-image"
                src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                alt=""
              />
              <p className="icon-para">No-Contact Delivery</p>
            </div>
          </div>
          <div>
            <button className="pay-btn">
              <a href="https://rzp.io/i/O4AvKifIT">Buy Now </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
