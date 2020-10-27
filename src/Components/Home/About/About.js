import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import about from '../../../images/about.png';
import { PrimaryBtn } from '../../Shared/Hero/HeroHomeContent/HeroHomeContent';

const About = () => {
  return (
    <Container style={{ marginTop: '80px' }}>
      <Row>
        <Col xl={5}>
          <img className='img-fluid' src={about} alt='' />
        </Col>
        <Col xl={6}>
          <AboutStyle>
            <h3>Exception Dental Care, on Your Terms</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores molestias, mollitia saepe sequi perspiciatis commodi
              odio. Aliquam molestiae possimus eum porro labore tempora a
              voluptatum, aliquid officia sint, quos esse architecto cumque ea
              officiis quae cum perspiciatis voluptates fugiat iure iste ex
              minima consequatur veniam? Ad, eaque alias ipsam nihil a quidem
              impedit minus doloremque accusamus, magni blanditiis tempore
              praesentium ipsa ab? Officia delectus iure praesentium quisquam
              quod tempora nulla!
            </p>
            <PrimaryBtn>Learn More</PrimaryBtn>
          </AboutStyle>
        </Col>
      </Row>
    </Container>
  );
};

const AboutStyle = styled.div`
  padding: 30px 0 10px;
  color: #bebebe;
  font-size: 19px;
  line-height: 1.6;
  h3 {
    color: #203047;
    font-size: 53px;
    margin-bottom: 40px;
  }
`;

export default About;
