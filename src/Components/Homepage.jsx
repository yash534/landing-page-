import React from "react";
import headphone from "../assets/img/headphones.svg";
import { RatingEmpty, RatingFill, About, Feature, Specification} from "../Components";
const Homepage = () => {
  return (
    <>
    {/* Section-1 */}
      <div className="home-hero">
        {/* image container */}
        <div className="col-1">
          <img src={headphone} alt="headphone" className="headphone-img" />
        </div>
        <div className="col-2">
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
          Utopia are THE reference high-fidelity headphones manufactured in France by Focal. They are the result of 40 years of innovation, development and manufacturing of high-end speaker drivers and loudspeakers. Equipped with exclusive technology, they offer striking realism, neutrality, dynamics and clarity, for sound with unrivalled purity.
          </p>
          <button className="buy-btn"><p className="btn-text">Buy Now</p></button>
        </div>
      </div>
      {/* section-1 end */}


      {/* section-2 */}
      <About/>
      {/* section-2 end */}

      {/* section-3  */}
      <Feature/>
      {/* section-3 end */}

      {/* section-4  */}
      <Specification />
      {/* section-4 end */}
    </>
  );
};

export default Homepage;
