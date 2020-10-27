import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceCard = ({ service }) => {
  return (
    <Col lg={4}>
      <ServiceCardStyle>
        <img src={service.img} alt='' />
        <h4>{service.title}</h4>
        <p>{service.details}</p>
      </ServiceCardStyle>
    </Col>
  );
};

const ServiceCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #b4b4b4;
  font-size: 18px;
  text-align: center;
  padding: 20px 5px;
  margin-top: 30px;

  img {
    max-height: 90px;
    margin-bottom: 30px;
  }
  h4 {
    color: #565e69;
    margin-bottom: 20px;
  }
`;
export default ServiceCard;
