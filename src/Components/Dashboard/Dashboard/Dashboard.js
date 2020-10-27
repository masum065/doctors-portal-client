import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const Dashboard = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [appointmentsByDate, setAppointmentsByDate] = useState([]);
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		fetch('http://localhost:4000/appointmentsByDate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ date: selectedDate }),
		})
			.then((res) => res.json())
			.then((data) => setAppointmentsByDate(data));
	}, [selectedDate]);
	return (
		<DashboardLayout heading='Appointment'>
			<Col lg={6}>
				<CalenderContaner>
					<Calendar onChange={handleDateChange} value={new Date()} />
				</CalenderContaner>
			</Col>
			<Col lg={6}>
				<ul>
					{appointmentsByDate.map((item, index) => (
						<li>{item.name}</li>
					))}
				</ul>
			</Col>
		</DashboardLayout>
	);
};

const CalenderContaner = styled.div`
	button.react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
		display: none;
	}
	button.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
		display: none;
	}
	.react-calendar {
		padding: 40px;
		border: none;
		margin-top: 50px;
		width: 100%;
		box-shadow: 0 0 9px #0000001c;
		line-height: 2.125em;
	}
	.react-calendar__tile--active {
		background: #1cc7c161;
		color: #000 !important;
	}
	.react-calendar__month-view__days__day--weekend {
		color: inherit;
	}
	.react-calendar__tile:enabled:hover,
	.react-calendar__tile:enabled:focus {
		background-color: #1cc7c1;
		color: #fff !important;
	}
	.react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
		font-size: 21px;
		color: #6a6a6a;
	}
	.react-calendar__month-view__weekdays__weekday abbr {
		text-decoration: none;
		font-size: 15px;
		color: #6a6a6a;
		font-weight: 500;
	}

	.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth
		abbr {
		color: #c3c3c3;
	}
	button.react-calendar__tile.react-calendar__month-view__days__day {
		color: #5a5a5a;
	}
`;

export default Dashboard;
