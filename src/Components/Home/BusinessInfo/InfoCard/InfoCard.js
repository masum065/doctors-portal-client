import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const InfoCard = (props) => {
  const { title, description, icon, background } = props.info;
  return (
    <Col style={{ paddingRight: 0 }} xl={4}>
      <InfoCardStyle background={`${background ? '#1CC7C1' : '#3A4256'}`}>
        <div className='icon'>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className='content'>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </InfoCardStyle>
    </Col>
  );
};

const InfoCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  background: ${(props) => props.background};
  color: #fff;

  .icon {
    font-size: 4em;
    width: 28%;
  }
`;

export default InfoCard;
