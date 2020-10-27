import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from '../../Shared/NavBar/NavBar';
import heroBg from '../../../images/heor-bg.png'
import Hero from '../../Shared/Hero/Hero';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppintmentHeader = ({handleDateChange}) => {
    return (
        <HeaderBg>
            <Container>
                <NavBar />
                <Hero>
                <h2>Apppointment</h2>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </Hero>
            </Container>
        </HeaderBg>
        
    );
};


const HeaderBg = styled.section`
background-image: url(${heroBg});
background-size: cover;
background-position: center;

    h2{
        font-weight: 700;
        color: #203047;
        font-size: 45px;
        padding-bottom: 13px;
        text-transform: capitalize;
    }
    button.react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
        display: none;
    }
    button.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
        display: none;
    }
    .react-calendar {
        padding: 10px;
        border: none;
        margin-top: 50px;
    }
    .react-calendar__tile--active {
        background: #1CC7C1;
        color: #fff !important;
    }
    .react-calendar__month-view__days__day--weekend {
        color: inherit;
    }

`
export default AppintmentHeader;