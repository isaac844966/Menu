import React from "react";
import Wrapper from "../assets/Wrapper/Navbar";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <img src={logo} className='logo' />

        <div>
          <a
            href={`https://wa.me/${2347087536021}`}
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
