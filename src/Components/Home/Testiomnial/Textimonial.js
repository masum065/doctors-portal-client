import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import quote from '../../../images/left-quote.svg';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from './TestimonialCard/TestimonialCard';

const Textimonial = () => {
  const testimonialData = [
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name: 'Wilson Harry',
      from: 'California',
      img: wilson,
    },
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name: 'Ema Gomez',
      from: 'California',
      img: ema,
    },
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name: 'Aliza Farari',
      from: 'California',
      img: aliza,
    },
  ];
  return (
    <TestimonialStyle>
      <Container>
        <Row>
          <Col xl={5}>
            <SectionTitle
              align='left'
              title='Testimonial'
              heading={`What's our Patents say`}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: '40px' }}>
          {testimonialData.map((testimonilal, index) => (
            <TestimonialCard key={index + 1} testimonilal={testimonilal} />
          ))}
        </Row>
      </Container>
    </TestimonialStyle>
  );
};

const TestimonialStyle = styled.section`
  margin-top: 150px;
  position: relative;

  ::before {
    position: absolute;
    right: 6%;
    top: -15%;
    content: '';
    width: 200px;
    height: 200px;
    background-image: url(${quote});
    background-size: cover;
    background-position: center;
  }
`;

export default Textimonial;
