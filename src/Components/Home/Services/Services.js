import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceCard from './ServiceCard/ServiceCard';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
const Services = () => {
  const serviceData = [
    {
      title: 'Fluoride Treatment',
      img: fluoride,
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, accusamus eveniet dignissimos maiores velit corrupti consectetur',
    },
    {
      title: 'Cavity Filling',
      img: cavity,
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, accusamus eveniet dignissimos maiores velit corrupti consectetur',
    },
    {
      title: 'Teeth Whitening',
      img: whitening,
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, accusamus eveniet dignissimos maiores velit corrupti consectetur',
    },
  ];

  return (
    <Container>
      <Row className='justify-content-center' style={{ marginTop: '100px' }}>
        <SectionTitle
          align='center'
          title='Our Srvice'
          heading='Services we Provide'
        ></SectionTitle>
      </Row>
      <Row>
        {serviceData.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
