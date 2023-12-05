import React from "react";
import Wrapper from "../assets/Wrapper/Hero";
import img from "../assets/images/img1.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='left'>
          <h1>
            Experiencing the <br />
            <span>excitement</span> when shopping{" "}
          </h1>
        </div>
        <div className='right'>
          <img src={img} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
