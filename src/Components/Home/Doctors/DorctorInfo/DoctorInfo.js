import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const DoctorInfo = ({doctor}) => {
    return (
        <Col xl={4}>
            <DoctorInfoStyle>
                <img src={doctor.img} alt=""/>
                 <h4>{doctor.name}</h4>
                 <p><FontAwesomeIcon icon={faPhone} /> {doctor.phone}</p>
            </DoctorInfoStyle>
        </Col>
    );
};


const DoctorInfoStyle = styled.div`
text-align: center;
color: #B8B7BA;
margin-top: 30px;
font-size: 15px;

img {
    max-width: 250px;
}

h4 {
    font-size: 22px;
    font-weight: 800;
    color: #3C3C3E;
    margin-top: 24px;
}
p{

    svg{
        color: #5FC7C7;
        margin-right: 10px;
    }
}
}

`

export default DoctorInfo;