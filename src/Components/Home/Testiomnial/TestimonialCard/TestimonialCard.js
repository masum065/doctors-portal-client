import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const TestimonialCard = (props) => {
  const { name, from, img, quote } = props.testimonilal;
  return (
    <Col xl={4}>
      <TestiCardStyle>
        <p>{quote}</p>

        <div className='author-box'>
          <img src={img} alt='' />
          <h5>
            {name}
            <span>{from}</span>
          </h5>
        </div>
      </TestiCardStyle>
    </Col>
  );
};

const TestiCardStyle = styled.div`
  padding: 30px;
  border: 0px solid;
  color: #83818a;
  text-align: left;
  box-shadow: 0px 4px 8px 4px #f4f4f4;

  .author-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    img {
      max-width: 50px;
      margin-right: 22px;
    }
    h5 {
      color: #5fc7c7;
      font-size: 18px;
      font-weight: 700;

      span {
        display: block;
        font-size: 70%;
        text-align: center;
        color: #94919f;
        font-weight: 500;
        margin-top: 5px;
      }
    }
  }
`;
export default TestimonialCard;
