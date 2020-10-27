import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import doctor from '../../../images/doctor.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import MakeAppintmentBg from '../../../images/makeAppintmentBg.png';
import { PrimaryBtn } from '../../Shared/Hero/HeroHomeContent/HeroHomeContent';
const MakeAppintment = () => {
  return (
    <MakeAppintmentStyle>
      <Container>
        <Row>
          <Col xl={{ span: 6, offset: 5 }}>
            <SectionTitle
              white
              align='left'
              title='Appintment'
              heading='Make an appointment today'
            ></SectionTitle>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quia aliquid placeat expedita, aliquam maiores?
            </p>

            <PrimaryBtn>Learn More</PrimaryBtn>
          </Col>

          <img src={doctor} className='absulate-doctor' alt='' />
        </Row>
      </Container>
    </MakeAppintmentStyle>
  );
};

const MakeAppintmentStyle = styled.section`
  background-image: url(${MakeAppintmentBg});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  margin-top: 170px;
  padding: 50px 0;
  ::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #383f52;
    opacity: 0.95;
    z-index: -1;
  }
  .absulate-doctor {
    position: absolute;
    left: 35px;
    bottom: 0;
    max-height: 580px;
  }
  p {
    font-size: 20px;
    color: #fff;
    margin: 40px 0;
  }
`;

export default MakeAppintment;
