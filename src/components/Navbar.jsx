import React from "react";
import Wrapper from "../assets/Wrapper/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <div className='logo'>S</div>
        <div>
          <a
            href={`https://wa.me/${2349029851346}`}
            target='_blank'
            // ref='noopener noreferrer'
          >
            Contact on whatsapp
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
