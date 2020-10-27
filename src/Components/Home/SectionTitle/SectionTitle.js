import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const SectionTitle = (props) => {
  return (
    <TitleStyle align={props.align} color={props.white ? '#fff' : '#203047'}>
      <h4>{props.title}</h4>
      <h2>{props.heading}</h2>
    </TitleStyle>
  );
};
const TitleStyle = styled.div`
  text-align: ${(props) => props.align};
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-transform: capitalize;
    color: ${(props) => props.color};
  }
  h4 {
    font-size: 21px;
    color: #5fc7c7;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default SectionTitle;
