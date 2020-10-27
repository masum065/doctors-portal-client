import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import heroBanner from '../../../images/banner.png';

const Hero = (props) => {
  return (
    <StyledRow className='row'>
      <Col lg={5}>{props.children}</Col>
      <Col lg={7}>
        <img src={heroBanner} alt='' />
      </Col>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 550px;
  padding-bottom: 50px;
`;
export default Hero;
