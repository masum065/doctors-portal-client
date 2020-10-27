import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from '../../Shared/NavBar/NavBar';
import heroBg from '../../../images/heor-bg.png';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Hero from '../../Shared/Hero/Hero'
import HeroHomeContent from '../../Shared/Hero/HeroHomeContent/HeroHomeContent'

const Header = () => {
  return (
    <HeaderBg>
      <Container style={{ position: 'relative', zIndex: '2' }}>
        <NavBar white/>
        <Hero>
          <HeroHomeContent />
        </Hero>
      </Container>
      <Container style={{ marginBottom: '50px' }}>
        <BusinessInfo />
      </Container>
    </HeaderBg>
  );
};

const HeaderBg = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  height: auto;
  ::after{
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      height: 100%;
      width: 32%;
      background-color: #3A4256;
      z-index: 1;
  }
}
`;

export default Header;
