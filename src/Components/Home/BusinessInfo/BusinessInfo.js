import React from 'react';
import {
  faClock,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import InfoCard from './InfoCard/InfoCard';
import { Row } from 'react-bootstrap';
const BusinessInfo = () => {
  const infosData = [
    {
      title: 'Opening Hours',
      description: 'We are open 7 days',
      icon: faClock,
      background: true,
      key: '1322sadf54',
    },
    {
      title: 'Visit Our Location',
      description: 'Brooklyn, NY 10003 USA',
      icon: faMapMarker,
      background: false,
      key: '1322ewxdf54',
    },
    {
      title: 'Call us now',
      description: '+15697854124',
      icon: faPhone,
      background: true,
      key: '1322swerf54',
    },
  ];
  return (
    <Row
      style={{
        position: 'relative',
        bottom: '-50px',
        marginTop: '-50px',
        zIndex: '5',
      }}
    >
      {infosData.map((info) => (
        <InfoCard key={info.key} info={info}></InfoCard>
      ))}
    </Row>
  );
};

export default BusinessInfo;
