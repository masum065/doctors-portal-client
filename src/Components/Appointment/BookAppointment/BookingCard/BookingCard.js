import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { PrimaryBtn } from '../../../Shared/Hero/HeroHomeContent/HeroHomeContent';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

const BookingCard = (props) => {
    const {subject, visitingHour, totalSpace} = props.booking;

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }


    return ( 
        <Col xl={4}>
            <BookingCardStyle>
                <h4>{subject}</h4>
                <p className="time">{visitingHour}</p>
                <p className="space">{totalSpace} Spaces Available</p>
                <PrimaryBtn onClick={openModal}>BOOK APPOINTMENT</PrimaryBtn>
            </BookingCardStyle>
            <AppointmentForm appointmentOn={subject} modalIsOpen={modalIsOpen} date={props.date} closeModal={closeModal} />
        </Col>
   
    );
};
const BookingCardStyle = styled.div`
text-align: center;
margin-top: 30px;
padding: 40px 30px;
box-shadow: 0 0 16px 8px #F7F7F7;

    h4 {
        color: #1CC7C1;
        font-weight: 600;
    }
    .time {
        font-size: 18px;
        font-weight: 500;
        color: #3A4256;
        margin-bottom: 4px;
    }
    .space {
        color: #A2A0A0;
        font-size: 15px;
    }
    button{
        padding: 10px 23px;
        font-size: 15px;
        margin: 13px auto 0;
    }
}

`


export default BookingCard;