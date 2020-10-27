import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import doctorAvatar from '../../../images/doctor-avatar.png'
import DoctorInfo from './DorctorInfo/DoctorInfo';
const Doctors = () => {
    const doctorsData = [
        {
        img: doctorAvatar,
        name: 'Dr Chaudi',
        phone: '014565465415'
        },
        {
        img: doctorAvatar,
        name: 'Dr Mandu',
        phone: '014565465415'
        },
        {
        img: doctorAvatar,
        name: 'Dr Pandu',
        phone: '014565465415'
        }

];


    return (
        <Container>
            <Row>
                <Title>
                    Doctors
                </Title>
                </Row>
                <Row>{doctorsData.map((doctor , index) => <DoctorInfo key={index} doctor={doctor} />)}</Row>
                
           
        </Container>
    );
};


const Title = styled.h4`

font-size: 21px;
    color: #5fc7c7;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 100px;
    text-align: center;
    width: 100%;
    margin-bottom : 20px;
`

export default Doctors;