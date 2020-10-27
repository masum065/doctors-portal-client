import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroHomeContent = (props) => {
  return (
    <HeroContentStyle>
      <h1>
        Your New Smile <br /> starts here
      </h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nam dolorem
        deleniti accusantium, minus necessitatibus praesentium nemo amet facilis
        consectetur.
      </small>
      <Link to="/appointment"><PrimaryBtn onClick={props.onClick}> Get Appoinment </PrimaryBtn></Link>
    </HeroContentStyle>
  );
};

const HeroContentStyle = styled.div`
  h1 {
    font-weight: 700;
    color: #203047;
    font-size: 45px;
    padding-bottom: 13px;
    text-transform: capitalize;
  }
  small {
    font-size: 15px;
    margin-bottom: 15px;
    color: #b4b4b4;
  }
`;

export const PrimaryBtn = styled.button`
  display: block;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 25px;
  background: rgb(25, 211, 174);
  background: linear-gradient(
    90deg,
    rgba(25, 211, 174, 1) 0%,
    rgba(14, 207, 236, 1) 100%
  );
  border: none;
`;
export default HeroHomeContent;
