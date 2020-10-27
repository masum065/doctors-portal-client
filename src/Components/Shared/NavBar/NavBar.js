import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = (props) => {
  
  return (
    <StyledNav>
      <Link to='/'>Home</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Dental Service</Link>
      <Link to='/' style={{ color: `${props.white && '#fff'}` }}>
        Reviews
      </Link>
      <Link to='/' style={{ color: `${props.white && '#fff'}` }}>
        Blog
      </Link>
      <Link to='/' style={{ color: `${props.white && '#fff'}` }}>
        Contact Us
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  text-align: right;
  a {
    text-align: left;
    padding: 20px;
    display: inline-block;
    margin-left: 7px;
    color: #3a4256;
    font-weight: 400;
  }
`;

export default NavBar;
